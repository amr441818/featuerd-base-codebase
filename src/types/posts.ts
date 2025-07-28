import { CompanyI } from "./company";

export interface PostI {
  id: string;
  content: string;
  media: string | null;
  media_type: string | null;
  total_likes: number;
  total_comments: number;
  is_liked: boolean;
  company: CompanyI;
  thumbnail: string;
  created_at: string; 
}
