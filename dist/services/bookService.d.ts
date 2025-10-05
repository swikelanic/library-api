import { Book } from '../models/book';
export declare const getAllBooks: () => Book[];
export declare const getBookById: (id: number) => Book | undefined;
export declare const addBook: (book: Omit<Book, "id">) => Book;
export declare const updateBook: (id: number, updatedBook: Partial<Book>) => Book | undefined;
export declare const deleteBook: (id: number) => boolean;
//# sourceMappingURL=bookService.d.ts.map