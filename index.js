// eslint-disable-next-line max-classes-per-file
class Collection {
  // eslint-disable-next-line no-unused-vars
  constructor(books) {
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  remove(book) {
    this.books = this.books.filter((i) => i !== book);
  }

  get(index) {
    return this.books[index];
  }
}

// eslint-disable-next-line max-classes-per-file
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const mBooks = [];
const myCollection = new Collection();

function removeBook(newBook) {
  newBook.forEach((b) => {
    const display = document.getElementById('book-list');
    const div = document.createElement('div');
    div.classList = 'book';
    div.innerHTML = `<div>"${b.title}" by ${b.author}</div><div><button class="remove">Remove</button></div>`;
    display.appendChild(div);
    const deletebtn = document.querySelectorAll('.remove');

    deletebtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const book = e.target.parentElement.parentElement;

        mBooks.forEach((b) => {
          if (`"${b.title}" by ${b.author}` === book.firstElementChild.innerHTML) {
            const index = mBooks.indexOf(b);
            mBooks.splice(index, 1);
            localStorage.setItem('myCollection', JSON.stringify(mBooks));
          }
        });

        myCollection.remove(book);
        book.remove();
        e.preventDefault();
      });
    });
  });
}

const addbtn = document.querySelector('.btn');
addbtn.addEventListener('click', (e) => {
  const title = document.querySelector('.title').value;
  const author = document.querySelector('.author').value;
  if (title === '' || author === '') {
    // eslint-disable-next-line no-alert
    alert('Please fill in all fields');
  } else {
    const newBook = new Book(title, author);
    myCollection.add(newBook);
    mBooks.push(newBook);
    const display = document.getElementById('book-list');
    const div = document.createElement('div');
    div.classList = 'book';
    div.innerHTML = `<div>"${newBook.title}" by ${newBook.author}</div><div><button class="remove">Remove</button></div>`;
    display.appendChild(div);
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
    e.preventDefault();
    localStorage.setItem('myCollection', JSON.stringify(mBooks));
    const deletebtn = document.querySelectorAll('.remove');

    deletebtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const book = e.target.parentElement.parentElement;
        myCollection.remove(book);
        removeBook(book);
        book.remove();
        e.preventDefault();
      });
    });
  }
});

window.onload = () => {
  const newBook = JSON.parse(localStorage.getItem('myCollection'));
  removeBook(newBook);
};