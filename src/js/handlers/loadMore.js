import { getPhotos } from '../api/photosService';
import { loadMoreButton } from '../gallery';
import createCardsMarkup from '../template/card';
import { photoQueryParams, refs } from '../utils/consts';
import { handleSearch } from './form';

async function handleLoadMore() {
  photoQueryParams.page += 1;
  loadMoreButton.disable();

  try {
    const photos = await getPhotos(photoQueryParams);

    const markup = createCardsMarkup(photos.results);

    refs.gallery.insertAdjacentHTML('beforeend', markup);

    loadMoreButton.enable();

    // перевірка на кінець колекції
    if (photoQueryParams.page >= photoQueryParams.maxPage) {
      loadMoreButton.hide();
      loadMoreButton.button.removeEventListener('submit', handleSearch);
    }
  } catch (err) {
    console.log(err);
    loadMoreButton.hide();
  }
}

export { handleLoadMore };
