/*
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

//! CRUD
// C - Create (POST)
// R - Read (GET)
// U - Update (PUT/PATCH)
// D - Delete (DELETE)

const BASE_URL = "https://67d317c48bca322cc2692f90.mockapi.io";

/*
 * Read (GET)
 */

function getBooks() {
  return fetch(`${BASE_URL}/books`).then((res) => {
    if (!res.ok) {
      throw new Error(`Error while getting books: ${res.status}`);
    }

    return res.json();
  });
}

function getBookById(id) {
  return fetch(`${BASE_URL}/books/${id}`).then((res) => {
    if (!res.ok) {
      throw new Error(
        `Error while getting a book with id ${id}: ${res.status}`
      );
    }

    return res.json();
  });
}

// getBooks().then(console.log).catch(console.error);
// getBookById(1).then(console.log).catch(console.error);
// getBookById(55).then(console.log).catch(console.error);

/*
 * Create (POST)
 */

/*
    method: "POST", - описує HTTP метод який зараз буде передаватись
    body: JSON.stringify(book), - описує тіло запиту, тобто ті дані які ми хочемо передати на сервер (у фрматі JSON)
    headers: { - список заголовків, тобто технічної інфонмації
      "Content-Type": "application/json", - один з заголовків який вказує тип контенту який ми передаємо на сервер, список усіх MIME типів можна вивчити за наступним посиланням: 
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    },

    Список всіх можливих заголовків: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers 
  */

function addNewBook(book) {
  const options = {
    method: "POST",
    body: JSON.stringify(book),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`${BASE_URL}/books`, options).then((res) => {
    if (!res.ok) {
      throw new Error(`Error while creating new book: ${res.status}`);
    }

    return res.json();
  });
}

// addNewBook({
//   title: "Тестова книга з JS",
//   author: "Я",
//   genres: ["JS"],
//   rating: 11,
// })
//   .then(console.log)
//   .catch(console.error);

// getBooks().then(console.log).catch(console.error);

/*
 * Update (PUT/PATCH)
 */

/*
в базі є обʼєкт:

{
    title: "Тестова книга з CSS",
    author: "Я",
    genres: ["CSS"],
    rating: 9,
    id: "1"
}

ці два методи оновлюють вже існуючі дані на сервері

* PUT - повне оновлення даних (також цей метод може створити дані на сервері якщо їх не було, наприклад, коли ви намагаєтесь оновити неіснуючі дані)

body: {
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я"
}

Отримаємо наступну відповідь від серверу:

{
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я",
  id: "1"
}


* PATCH - часткове оновлення даних

body: {
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я"
}

Отримаємо наступну відповідь від серверу:

{
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я",
  genres: ["CSS"],
  rating: 9,
  id: "1"
}
*/

function updateBookById(id, fieldsToUpdate) {
  const options = {
    method: "PUT",
    body: JSON.stringify(fieldsToUpdate),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then((res) => {
    if (!res.ok) {
      throw new Error(
        `Error while updating a book wit id ${id}: ${res.status}`
      );
    }

    return res.json();
  });
}

updateBookById(4, {
  genres: ["Fiction", "Psyhology"],
  rating: 10,
})
  .then(console.log)
  .catch(console.error);

// updateBookById(100, {
//   genres: ['Fiction', 'Psyhology'],
//   rating: 10,
// })
//   .then(console.log)
//   .catch(console.error);

/*
 * Delete (DELETE)
 */

function deleteBookById(id) {
  const options = {
    method: "DELETE",
  };

  return fetch(`${BASE_URL}/books/${id}`, options).then((res) => {
    if (!res.ok) {
      throw new Error(
        `Error while deleting a book with id ${id}: ${res.status}`
      );
    }

    return res.json();
  });
}

// deleteBookById(3).then(console.log).catch(console.error);
// deleteBookById(3).then(console.log).catch(console.error);
