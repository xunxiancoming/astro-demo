import type Article from "./article";
import type Category from "./category";

export interface ArticleCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  category: Category;
  articles: Article[];
  created_at: string;
  updated_at: string;
}
