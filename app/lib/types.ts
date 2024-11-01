export interface Post {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  body: string;
  lastModified?: number;
}