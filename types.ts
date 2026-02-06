
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
