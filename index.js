function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    // Step 1: Fetch data from the Game of Thrones API
    return fetch("https://anapioficeandfire.com/api/books")
    // Step 2: Convert the response to JSON
    .then(response => response.json())
    // Step 3: Pass the book data to renderBooks to display on the page
    .then(bookData => renderBooks(bookData));
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
