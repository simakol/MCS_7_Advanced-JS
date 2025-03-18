import { handleSearch } from './handlers/form';
import { refs } from './utils/consts';

refs.searchForm.addEventListener('submit', handleSearch);
