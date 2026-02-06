import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Node extends d3.SimulationNodeDatum {
  id: string;
  type: 'knot' | 'ligand' | 'metal';
  x?: number;
  y?: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | number | Node;
  target: string | number | Node;
  value: number;
}

const MolecularGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 500;
    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const nodes: Node[] = [];
    const links: Link[] = [];
    const knotPoints = 36;
    
    for (let i = 0; i < knotPoints; i++) {
      const t = (i / knotPoints) * 2 * Math.PI;
      nodes.push({ 
        id: `k-${i}`, 
        type: 'knot',
        x: width / 2 + (Math.sin(t) + 2 * Math.sin(2 * t)) * 50,
        y: height / 2 + (Math.cos(t) - 2 * Math.cos(2 * t)) * 50
      });
      if (i > 0) {
        links.push({ source: `k-${i-1}`, target: `k-${i}`, value: 1 });
      }
    }
    links.push({ source: `k-${knotPoints-1}`, target: `k-0`, value: 1 });

    const simulation = d3.forceSimulation<Node>(nodes)
      .force('link', d3.forceLink<Node, Link>(links).id(d => d.id).distance(20))
      .force('charge', d3.forceManyBody().strength(-50))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(15));

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', '#660099')
      .attr('stroke-width', 4)
      .attr('stroke-opacity', 0.6)
      .attr('stroke-linecap', 'round');

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 6)
      .attr('fill', '#ffcc00')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2)
      .call(d3.drag<SVGCircleElement, Node>()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    simulation.on('tick', () => {
      link
        .attr('x1', d => (d.source as any).x)
        .attr('y1', d => (d.source as any).y)
        .attr('x2', d => (d.target as any).x)
        .attr('y2', d => (d.target as any).y);

      node
        .attr('cx', d => d.x!)
        .attr('cy', d => d.y!);
    });

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="w-full h-[500px] relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl backdrop-blur-sm">
      <div className="absolute top-6 left-6 z-10 flex flex-col gap-1">
        <span className="text-[#660099] font-bold text-[10px] uppercase tracking-[0.3em]">Active Topology</span>
        <h3 className="text-slate-900 font-bold text-xl serif italic">Artificial Trefoil Molecular Knot</h3>
      </div>
      <svg ref={svgRef} className="w-full h-full" />
      <div className="absolute bottom-6 left-6 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
        Synthesis: Metal-Template Assembly | University of Manchester
      </div>
    </div>
  );
};

export default MolecularGraph;