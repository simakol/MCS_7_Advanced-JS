/*
 * Перепишемо на async/await
 * Використовуємо бібліотеку https://axios-http.com/
 *
 * Використовуємо сервіс https://mockapi.io/ для бекенду
 */

import axios from 'axios';

axios.defaults.baseURL = 'https://67d317c48bca322cc2692f90.mockapi.io';

/*
 * Read (GET)
 */

//* with fetch

// function getBooks() {
//   return fetch(`${BASE_URL}/books`).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while getting books: ${res.status}`);
//     }

//     return res.json();
//   });
// }

// getBooks().then(console.log).catch(console.error);

//* with axios

async function getBooks() {
  const { data } = await axios.get('/books');

  return data;
  //   return (await axios.get('/books')).data;
}

// getBooks().then(console.log).catch(console.log);

/*
 * Create (POST)
 */

//* with fetch
// function addNewBook(book) {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(book),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(`${BASE_URL}/books`, options).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while adding new book: ${res.status}`);
//     }

//     console.log(res);

//     return res.json();
//   });
// }

// addNewBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(console.log)
//   .catch(console.error);

//* with axios

function addNewBook(book) {
  return axios.post('/books', book);
}

// addNewBook({
//   title: 'Тестова книга з CSS',
//   author: 'Я',
//   genres: ['CSS'],
//   rating: 9,
// })
//   .then(console.log)
//   .catch(console.error);

/*
 * Update (PUT/PATCH)
 */

//* with fetch
// function updateBookById(id, fieldsToUpdate) {
//   const options = {
//     method: 'PUT',
//     body: JSON.stringify(fieldsToUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   return fetch(`${BASE_URL}/books/${id}`, options).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while updating a book with id ${id}: ${res.status}`);
//     }

//     console.log(res);

//     return res.json();
//   });
// }

// updateBookById(12, {
//   genres: ['Fiction', 'Psyhology'],
//   rating: 10,
// })
//   .then(console.log)
//   .catch(console.error);

//* with axios

function updateBookById(id, fieldsToUpdate) {
  return axios.put(`/books/${id}`, fieldsToUpdate);
}

// updateBookById(8, {
//   genres: ['Fiction', 'Psyhology'],
//   rating: 10,
// })
//   .then(console.log)
//   .catch(console.error);

/*
 * Delete (DELETE)
 */

//* with fetch
// function deleteBookById(id) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${id}`, options).then(res => {
//     if (!res.ok) {
//       throw new Error(`Error while deleting a book with id ${id}: ${res.status}`);
//     }

//     console.log(res);
//     return res.json();
//   });
// }

// deleteBookById(13).then(console.log).catch(console.error);
// deleteBookById(13).then(console.log).catch(console.error);

//* with axios

function deleteBookById(id) {
  return axios.delete(`/books/${id}`);
}

deleteBookById(8).then(console.log).catch(console.error);
deleteBookById(8).then(console.log).catch(console.error);
