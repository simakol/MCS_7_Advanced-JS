const refs = {
  searchForm: document.querySelector('.js-search-form'),
  gallery: document.querySelector('.js-gallery'),
  notFoundText: document.querySelector('.js-not-found-text'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

const ACTIVE_CLASS = 'active';

const photoQueryParams = {
  page: 1,
  perPage: 10,
  query: '',
  maxPage: 1,
};

export { refs, ACTIVE_CLASS, photoQueryParams };
