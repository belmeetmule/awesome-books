class Collection {
    constructor(title, author){
        this.title=title;
        this.author=author;
    }
}

let book = [
    book1={
        title:"book1",
        author:"author1"
    },
    book2={
        title:"book2",
        author:"author2"
    }
]

console.log(book);

/* for(let i=0; i < book.length;i++){
    const display = document.querySelector('.book-display');
    const div = document.createElement('div');
    div.className = 'book-list';

    display.appendChild(div);

    const title = document.createElement('p');
    title.textContent=book[i].title;
    title.className='class-title';

    div.appendChild(title);

    const author = document.createElement('p');
    author.textContent=book[i].title;
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
    })
}
 */

const addBook = () => {
    const bookTitle = document.querySelector('.title');
    const bookAuthor = document.querySelector('.author');
    const newBook = new Collection(bookTitle.value, bookAuthor.value);
    book.push(newBook);

    //display new book
    if(bookTitle.value && bookAuthor.value){
        const display = document.querySelector('book-display');
    const div = document.createElement('div');
    div.className = 'book-list';

    display.appendChild(div);

    const title = document.createElement('p');
    title.textContent=book[i].title;
    title.className='class-title';

    div.appendChild(title);

    const author = document.createElement('p');
    author.textContent=book[i].title;
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
addButton.addEventListener('click', addBook());

/*
function addToUI(book){
   

}

function addBook(){
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    book.title=title;
    book.author=author;
    console.log(book);
}

const form = document.getElementById('form');
console.log('i am here');
form.addEventListener('submit', addBook);

*/