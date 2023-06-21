'use strict';
const pageBody = document.querySelector('body');

const bookList = pageBody.querySelector('.books');
const books = bookList.querySelectorAll('.book');

const bookThreeTitle = books[4].querySelector('h2 > a');

const advertisement = pageBody.querySelector('.adv');

const bookTwoItems = books[0].querySelectorAll('ul > li');
const bookFiveItems = books[5].querySelectorAll('ul > li');

const bookSixItems = books[2].querySelectorAll('ul > li');

bookList.prepend(books[1]);
bookList.after(books[2]);
books[4].after(books[3]);

pageBody.style.backgroundImage = 'url("./image/you-dont-know-js.jpg")';

bookThreeTitle.textContent = 'Книга 3. this и Прототипы Объектов';

advertisement.remove();

bookTwoItems[9].after(bookTwoItems[2]);
bookTwoItems[3].after(bookTwoItems[6]);
bookTwoItems[6].after(bookTwoItems[8]);

bookFiveItems[2].before(bookFiveItems[9], bookFiveItems[3], bookFiveItems[4]);
bookFiveItems[8].before(bookFiveItems[5]);

bookSixItems[9].insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>');
