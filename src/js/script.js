const library = [];

library.push(new Book("A Hora da Estrela", "Clarice Lispector", 87, true))

function Book (title, author, pages, isRead) {

    this.id = crypto.randomUUID();

    this.title = title;

    this.author = author;

    this.pages = Number(pages);

    this.isRead = isRead;

}

function addBookToLibrary() {

    const title = document.querySelector("#in-title").value;

    const author = document.querySelector("#in-author").value;

    const pages = document.querySelector("#in-pages").value;

    const isRead = document.querySelector("#in-read").checked;

    const book = new Book(title, author, pages, isRead);

    library.push(book);

    cleanForm();

    renderBooks();

}

function removeBookToLibrary(id) {

    library.forEach(book => {

        if (book.id === id) {

            library.splice(library.indexOf(book), 1);

        }

    });

    renderBooks();

}

function markBook(id) {

    library.forEach(book => {

        if(book.id === id) {

            book.isRead = !book.isRead;

        }

    });

    renderBooks();

}

function renderBooks() {

    const booksArea = document.querySelector(".books");

    booksArea.innerHTML = "";

    library.forEach( book => {

        const bookCard = document.createElement("div");

        bookCard.classList.add("card");

        bookCard.id = `${book.id}`;

        bookCard.innerHTML = `

            <div class="book-image">

                <i class="bi bi-book-half book"></i>

            </div>

            <h2 class="book-title">${book.title}</h2>

            <h3 class="book-author">${book.author}</h3>

            <p class="pages">${book.pages} pages</p>

            <div class="card-actions">

                <button class="btn ${book.isRead ? 'btn-read' : 'btn-unread'}" onclick="markBook('${book.id}')">

                    <span>${book.isRead ? 'Read' : 'Unread'}</span>

                    <i class="bi ${book.isRead ? 'bi-bookmark-check' : 'bi-bookmark-x'}"></i>

                </button>

                <button class="btn btn-remove" onclick="removeBookToLibrary('${book.id}')">

                    <span>Remove</span>

                    <i class="bi bi-trash"></i>

                </button>

            </div>

        `;

        booksArea.appendChild(bookCard);

    });

}

function cleanForm() {

    const form = document.querySelector(".modal form");

    form.reset();

}

const addBookButton = document.querySelector(".btn-form-add");

addBookButton.addEventListener("click", (event) =>{ 
    
    event.preventDefault();

    addBookToLibrary()

    document.querySelector(".modal").classList.remove("active");

});

renderBooks();