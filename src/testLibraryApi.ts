import * as memberService from './services/memberService';
import * as bookService from './services/bookService';

console.log('--- All Members ---');
console.log(memberService.getAllMembers());

console.log('--- Add Member ---');
const newMember = memberService.addMember({ name: 'Charlie Brown', email: 'charlie@example.com', membershipDate: new Date() });
console.log(newMember);

console.log('--- All Books ---');
console.log(bookService.getAllBooks());

console.log('--- Add Book ---');
const newBook = bookService.addBook({ title: 'Brave New World', author: 'Aldous Huxley', publishedDate: new Date('1932-01-01'), available: true });
console.log(newBook);
