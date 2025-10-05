// src/models/book.ts
export interface Book {
  id: number;
  title: string;
  author: string;
  publishedDate: Date;  // ✅ make sure this exists
  available: boolean;
}
