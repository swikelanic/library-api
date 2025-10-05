import { Book } from '../models/book';

// Sample data
let books: Book[] = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedDate: new Date('1925-04-10'), available: true },
  { id: 2, title: '1984', author: 'George Orwell', publishedDate: new Date('1949-06-08'), available: true },
];

// Helper to get next ID
const getNextId = (): number => books.length ? books[books.length - 1]!.id + 1 : 1;

export const getAllBooks = (): Book[] => books;

export const getBookById = (id: number): Book | undefined =>
  books.find(b => b.id === id);

export const addBook = (book: Omit<Book, 'id'>): Book => {
  const newBook: Book = { ...book, id: getNextId() };
  books.push(newBook);
  return newBook;
};

export const updateBook = (id: number, updatedBook: Partial<Book>): Book | undefined => {
  const book = books.find(b => b.id === id);
  if (book) Object.assign(book, updatedBook);
  return book;
};

export const deleteBook = (id: number): boolean => {
  const index = books.findIndex(b => b.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
};
