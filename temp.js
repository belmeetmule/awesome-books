//const books = [];
class Book{
    constructor(title, author){
      this.title=title;
      this.author=author;
    }
  
    bookSummary() {
      return `"${this.title}" by ${this.author}`;
    }
}

class UI{
      // create book object and add it to array and local store
  addBook(newBook){
    const bookContainer = document.getElementById('.book-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
                <td>${newBook.title}</td>
                <td>${newBook.author}</td>
                <td><a href = '#' class='remove'>X</a></td>

                `;
                bookContainer.appendChild(tr);

                // add book to the array
    //book.push(newBook);
  
    // save it to local storage
   // saveData(book);

  }

  removeBook(target) {
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
  }
  
  clearFields(){
    document.querySelector('.title').value='';
    document.querySelector('.author').value='';
}
    
  
    // display the book on the page
   // let display = new UI();
   // display.displayBook(newBook);
  
  
    // display book object on UI
 /*  displayBook(book){
    if (book) {
      const display = document.querySelector('.book-display');
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
  
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove';
  
      div.appendChild(remove);
  
      remove.addEventListener('click', (e) => {
        Books.removeBook(e.target);
        e.preventDefault();
      });
    } */
  }

     // Remove object from the array, local store and UI
    

 
  
  
  // saves array of objects into local store
 /*  const saveData = (book) => {
    localStorage.setItem('savedBooks', JSON.stringify(book));
  }; */
  
  
  // fired on page load to show data from the local store
 /*  const showSavedBook = () => {
    // const books = localStorage.getItem('savedBooks');
    const books = JSON.parse(localStorage.getItem('savedBooks'));
    console.log(books)
    if (books) {
      books.forEach(UI.displayBook);
    }
  }; */
  
  // event listner to the add button
 /*  const addButton = document.querySelector('.btn');
  addButton.addEventListener('click', addBook);
    bookTitle.value = '';
    bookAuthor.value = '';
  // this is going to be fired when the page loads
  window.onload = () => {
    showSavedBook();
  }; */

  document.querySelector('#form').addEventListener('submit', function(e){
    const bookTitle = document.querySelector('.title').value;
    const bookAuthor = document.querySelector('.author').value;

    const newBook = new Book(bookTitle, bookAuthor);
    console.log(newBook)
    const ui =new UI();
    if(bookTitle==='' || bookAuthor === ''){
        alert('please fill all the fields');
    }else{
        ui.addBook(newBook);
        alert('Book added successfully !!');

        ui.clearFields();
    }

    e.preventDefault();
  });