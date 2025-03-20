import { getPhotos } from '../api/photosService';
import { loadMoreButton } from '../gallery';
import createCardsMarkup from '../template/card';
import { refs, ACTIVE_CLASS, photoQueryParams } from '../utils/consts';
import { handleLoadMore } from './loadMore';

async function handleSearch(event) {
  event.preventDefault();

  // скидання попередніх станів перед повторним запитом
  refs.notFoundText.innerHTML = '';
  loadMoreButton.hide();
  photoQueryParams.page = 1;
  photoQueryParams.maxPage = 1;

  const form = event.currentTarget;
  const userQuery = form.elements.user_query.value.trim();

  if (userQuery === '') {
    alert('Будь ласка, введіть запит!');
    return;
  }

  refs.loader.classList.add(ACTIVE_CLASS);
  photoQueryParams.query = userQuery;

  try {
    const photos = await getPhotos(photoQueryParams);

    refs.loader.classList.remove(ACTIVE_CLASS);

    photoQueryParams.maxPage = photos.total_pages; // зберігаємо номер останньої сторінки в пагінації

    if (photos.total === 0) {
      refs.gallery.innerHTML = '';
      refs.notFoundText.innerHTML = `Результатів по запиту <span>${userQuery}</span> не знайдено!`;
      return;
    }

    refs.gallery.innerHTML = createCardsMarkup(photos.results);

    // якщо за перший запит ми отримали всі обʼєкти колекції - не показуємо кнопку завантажити більше
    if (photoQueryParams.maxPage === 1) {
      return;
    }

    loadMoreButton.show();
    loadMoreButton.enable();
    loadMoreButton.button.addEventListener('click', handleLoadMore);
  } catch (err) {
    refs.loader.classList.remove(ACTIVE_CLASS);
    console.log(err);
  } finally {
    form.reset();
  }
}

export { handleSearch };
