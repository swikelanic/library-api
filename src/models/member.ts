// src/models/author.ts

export interface Author {
  id: number;
  name: string;
  bio?: string;
  birthYear?: number;
}

// Temporary in-memory storage
export const authors: Author[] = [];
