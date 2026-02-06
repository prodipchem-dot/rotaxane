
export interface NavItem {
  label: string;
  href: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface TeamMember {
  name: string;
  grad: string;
  img: string;
  email?: string;
}

export interface ProjectDetail {
  slug: string;
  citation: string;
  narrativeTitle: string;
  narrative: string[];
  figures: {
    type: 'image' | 'video';
    url: string;
    caption: string;
  }[];
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  link: string;
  img: string;
  highlight?: string;
  isCover?: boolean;
}

export interface YearGroup {
  year: string;
  papers: Publication[];
}

export interface WorldResearcher {
  name: string;
  institution: string;
  url: string;
  region: string;
}
