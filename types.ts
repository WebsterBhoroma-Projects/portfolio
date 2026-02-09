
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  status: 'Live' | 'Archive';
}

export interface Award {
  title: string;
  organizer: string;
  year: string;
  description: string;
}

export interface ApproachCard {
  title: string;
  content: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  icon: string;
}
