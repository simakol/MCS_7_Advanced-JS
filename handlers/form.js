import { addNewBook } from "../services/api/bookService.js";

function handleBookAdd(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const { title, author, genres, rating } = form.elements;

  const formData = {
    title: title.value.trim(),
    author: author.value.trim(),
    genres: genres.value.trim(),
    rating: Number(rating.value.trim()),
  };

  if (formData.title === "") {
    alert("Заповніть поле заголовку!");
    return;
  }

  if (formData.author === "") {
    alert("Вкажіть автора!");
    return;
  }

  if (formData.genres === "") {
    alert("Вкажіть cписок жанрів через кому!");
    return;
  }

  const genresArr = formData.genres.split(",");

  if (genresArr.length === 0) {
    alert("Вкажіть жанр(-и)!");
    return;
  }

  formData.genres = genresArr;

  if (isNaN(formData.rating)) {
    alert("Рейтинг повинен бути числом!");
    return;
  }

  if (formData.rating <= 0) {
    alert("Рейтинг повинен додатнім числом!");
    return;
  }

  if (formData.rating > 10) {
    alert("Рейтинг не може бути більшим за 10!");
    return;
  }

  addNewBook(formData)
    .then((book) => {
      alert(`Книжка ${book.title} додана!`);
      form.reset();
    })
    .catch((err) => alert(`Сталась помилка при додаванні книжки: ${err}`));
}

export { handleBookAdd };
