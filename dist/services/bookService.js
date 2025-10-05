"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addBook = exports.getBookById = exports.getAllBooks = void 0;
// Sample data
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedDate: new Date('1925-04-10'), available: true },
    { id: 2, title: '1984', author: 'George Orwell', publishedDate: new Date('1949-06-08'), available: true },
];
const getNextId = () => books.length ? books[books.length - 1].id + 1 : 1;
const getAllBooks = () => books;
exports.getAllBooks = getAllBooks;
const getBookById = (id) => books.find(b => b.id === id);
exports.getBookById = getBookById;
const addBook = (book) => {
    const newBook = { ...book, id: getNextId() };
    books.push(newBook);
    return newBook;
};
exports.addBook = addBook;
const updateBook = (id, updatedBook) => {
    const book = books.find(b => b.id === id);
    if (book)
        Object.assign(book, updatedBook);
    return book;
};
exports.updateBook = updateBook;
const deleteBook = (id) => {
    const index = books.findIndex(b => b.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteBook = deleteBook;
//# sourceMappingURL=bookService.js.map