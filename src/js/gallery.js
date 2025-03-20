import { handleSearch } from './handlers/form.js';
import { refs } from './utils/consts';
import LoadMoreButton from './services/ButtonService.js';

refs.searchForm.addEventListener('submit', handleSearch);

const loadMoreButton = new LoadMoreButton(refs.loadMoreBtn);

export { loadMoreButton };
