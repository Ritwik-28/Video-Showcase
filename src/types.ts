export interface Video {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate';
  url: string;
  category: string;
}

export interface TabData {
  id: string;
  label: string;
  videos: Video[];
}