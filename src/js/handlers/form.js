import { getPhotos } from '../services/api/photos';
import { createCardsMarkup } from '../templates/gallery';
import { refs, ACTIVE_CLASS } from '../utils/consts';

async function handleSearch(event) {
  event.preventDefault();
  refs.notFoundText.innerHTML = '';

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  if (userQuery === '') {
    alert('Будь ласка, введіть запит!');
    return;
  }

  refs.loader.classList.add(ACTIVE_CLASS);

  try {
    const photos = await getPhotos(userQuery);

    refs.loader.classList.remove(ACTIVE_CLASS);

    if (photos.total === 0) {
      refs.gallery.innerHTML = '';
      refs.notFoundText.innerHTML = `Результатів по запиту <span>${userQuery}</span> не знайдено!`;
      return;
    }

    refs.gallery.innerHTML = createCardsMarkup(photos.results);
  } catch (err) {
    refs.loader.classList.remove(ACTIVE_CLASS);
    console.log(err);
  } finally {
    form.reset();
  }

  // getPhotos(userQuery)
  //   .then(photos => {
  //     refs.loader.classList.remove(ACTIVE_CLASS);

  //     if (photos.total === 0) {
  //       refs.gallery.innerHTML = '';
  //       refs.notFoundText.innerHTML = `Результатів по запиту <span>${userQuery}</span> не знайдено!`;
  //       return;
  //     }
  //     refs.gallery.innerHTML = createCardsMarkup(photos.results);
  //   })
  //   .catch(err => {
  //     refs.loader.classList.remove(ACTIVE_CLASS);
  //     console.log(err);
  //   })
  //   .finally(() => {
  //     form.reset();
  //   });
}

export { handleSearch };
