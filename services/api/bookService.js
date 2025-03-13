const BASE_URL = "https://67d317c48bca322cc2692f90.mockapi.io";

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

export { addNewBook };
