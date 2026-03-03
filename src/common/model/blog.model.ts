export interface BlogPostModel {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  image?: string;
  linkedinUrl?: string;
}