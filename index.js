function fetchBooks() {
return   fetch('https://anapioficeandfire.com/api/books')
<<<<<<< HEAD
         .then(resp => resp.json())
         .then(json => renderBooks(json))
=======
  .then(resp => resp.json())
  .then(json => renderBooks(json))
>>>>>>> 8ab4494789ba27607ba474c53e7dcd7c54d8b7e3
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

})
