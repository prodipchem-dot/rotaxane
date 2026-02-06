import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Wand2, Loader2 } from 'lucide-react';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Greetings! I am the Leigh Group Digital Scholar. I can explain the 'magic' of molecular knotting, the mechanics of our walkers, and our latest research at the University of Manchester. How can I assist your synthesis today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are the AI Lab Assistant for the David Leigh Research Group at the University of Manchester. Your expertise is in Topological Chemistry, Molecular Knots (Trefoil, Pentafoil, 819), Molecular Walkers, and Molecular Motors. You often use the analogy that chemistry is like magic. Your tone is witty, brilliant, and sophisticated. You should mention Manchester and Prof. David Leigh's pioneering role when appropriate."
        }
      });

      const assistantContent = response.text || "Apologies, the molecular simulation failed. Please try your prompt again.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantContent }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Connection interrupted. Our molecular information processor is busy. Try again soon." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-full ring-1 ring-slate-100">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#660099] rounded-2xl flex items-center justify-center -rotate-6 shadow-md">
            <Wand2 className="text-white w-6 h-6" />
          </div>
          <div>
            <h4 className="text-slate-900 font-bold text-base tracking-tight serif italic">Molecular Scholar</h4>
            <p className="text-[#660099] text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#660099] rounded-full animate-pulse"></span> Manchester Intelligence
            </p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-4 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`p-5 rounded-3xl text-sm leading-relaxed shadow-sm ${
                m.role === 'user' 
                  ? 'bg-[#ffcc00] text-slate-900 font-bold' 
                  : 'bg-slate-100 text-slate-800 border border-slate-200'
              }`}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 p-4 bg-slate-50 rounded-2xl w-fit border border-slate-100">
            <Loader2 className="animate-spin text-[#660099]" size={18} />
            <span className="text-xs text-slate-500 italic font-bold">Synthesizing magic...</span>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-100">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Trefoil Knots or Walkers..."
            className="w-full bg-white text-slate-900 border border-slate-200 rounded-2xl px-6 py-5 pr-16 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-slate-400 text-sm shadow-inner"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-[#660099] text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 transition-all shadow-md"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;