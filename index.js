class Books{
  constructor(title, author){
    this.title=title;
    this.author=author;
  }

  
  bookSummary() {
    return `"${this.title}" by ${this.author}`;
  }

  // Remove object from the array, local store and UI
 static removeBook(target) {
  if (target.className === 'remove') {
    book.forEach((b) => {
      if (b.title === target.parentElement.firstElementChild.innerHTML) {
        const index = book.indexOf(b);
        book.splice(index, 1);
        saveData(book);
        target.parentElement.remove();
      }
    });
  }
};

// display book object on UI
static displayBook(book){
  if (book) {
    const display = document.querySelector('.book-display');
    console.log('i am here too');
    const div = document.createElement('div');
    div.className = 'book-list';

    display.appendChild(div);

    const title = document.createElement('p');
    title.textContent = book.title;
    title.className = 'class-title';

    div.appendChild(title);

    const author = document.createElement('p');
    author.textContent = book.author;
    author.className = 'class-title';

    div.appendChild(author);

    // const bookItem = localStorage.setItem('book', JSON.stringify(book));

    const remove = document.createElement('button');
    remove.textContent = 'Remove';
    remove.className = 'remove';

    div.appendChild(remove);

    remove.addEventListener('click', (e) => {
      Books.removeBook(e.target);
      e.preventDefault();
    });
  }
};

// create book object and add it to array and local store
static addBook(newBook){
  /*const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  const newBook = new Books(bookTitle, bookAuthor);*/
  
  // add book to the array
  book.push(newBook);

  // save it to local storage
  saveData(book);

  // display the book on the page
  Books.displayBook(newBook);

  console.log('i am here');
  // clear fields
 /* bookTitle.value = '';
  bookAuthor.value = ''; */
};

}

const book = [];

// saves array of objects into local store
const saveData = (book) => {
  localStorage.setItem('savedBooks', JSON.stringify(book));
};


// fired on page load to show data from the local store
const showSavedBook = () => {
  // const books = localStorage.getItem('savedBooks');
  const books = JSON.parse(localStorage.getItem('savedBooks'));
  if (books) {
    books.forEach(book in books)
  }
};

  const bookTitle = document.querySelector('.title').value;
  const bookAuthor = document.querySelector('.author').value;
  const newBook = new Books(bookTitle, bookAuthor);

// event listner to the add button
const addButton = document.querySelector('.btn');
addButton.addEventListener('click', Books.addBook(newBook));
  bookTitle.value = '';
  bookAuthor.value = '';
// this is going to be fired when the page loads
window.onload = () => {
  showSavedBook();
};