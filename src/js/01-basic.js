/*
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  })
  .then(json => console.log(json))
  .catch(err => {
    console.log('CATCH BLOCK');
    console.log(err);
  });
