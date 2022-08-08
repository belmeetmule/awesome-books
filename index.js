// array of the book objects
let book = [];

const addBook = () => {
    const bookTitle = document.querySelector('.title');
    const bookAuthor = document.querySelector('.author');
    const newBook = {};
    newBook.title = bookTitle.value;
    newBook.author = bookAuthor.value;
    
    book.push(newBook);

    //display new book
    if(bookTitle.value && bookAuthor.value){
        const display = document.querySelector('.book-display');
        const div = document.createElement('div');
        div.className = 'book-list';

        display.appendChild(div);

        const title = document.createElement('p');
        title.textContent=newBook.title;
        title.className='class-title';

        div.appendChild(title);

        const author = document.createElement('p');
        author.textContent=newBook.author;
        author.className='class-title';

        div.appendChild(author);

        const remove = document.createElement('button');
        remove.textContent='Remove';
        remove.className ='remove';

        div.appendChild(remove);
        
        remove.addEventListener('click', () => {
            div.style.display = 'none';
            for(let i=0; i< book.length; i++){
                if(book[i].title === title.textContent){
                    book.splice(i,1);
                }
            }
        }); 
        bookTitle.value='';
        bookAuthor.value='';     
        }
}

//add button
const addButton = document.querySelector('.btn');
addButton.addEventListener('click', addBook);

const saveInput = () =>{
    const bookContent = {
        title: document.querySelector('.title').value,
        author: document.querySelector('.author').value
    };

    window.localStorage.setItem('bookContent', JSON.stringify(bookContent));
};

window.onload=()=>{
    const bookContent= JSON.parse(window.localStorage.getItem('bookContent'));
    console.log(bookContent);
    if(bookContent){
        document.querySelector('.title').value = bookContent.title;
        document.querySelector('.author').value = bookContent.author;
    }
}