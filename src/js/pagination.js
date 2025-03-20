// https://jsonplaceholder.typicode.com/

import { getPosts } from './api/jsonPlaceholder';
import LoadMoreButton from './services/ButtonService';
import { createPostCards } from './template/postCard';

/*
1. оголошуємо змінні page = 1, perPage = 20
2. створимо фукнцію для рендеру постів, викликаємо фукнцію отримання масиву постів з нашими параметрами пагінації, перевіряємо що масив не пустий та показуємо кнопку завантажити більше та малюємо розмітку постів
3. Вішаємо слухач на кнопку
4. Створимо фукнцію завантаження наступної сторінки:
    4.1. інкремент поточної сторінки 
    4.2. виключаємо кнопку та показуємо прелоадер
    4.3. робимо новий запит на нову сторінку
    4.4. перевіряємо що масив даних не є пустим, якщо він пустий - ховаємо кнопку та видаляємо слухач подій
    4.5. відмальовуємо розмітку отриманих даних
    4.6. включаємо кнопку та прибираємо лоадер
*/

const refs = {
  list: document.querySelector('.js-posts'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

const loadMoreButton = new LoadMoreButton(refs.loadMoreBtn);

let page = 1,
  perPage = 20;

renderPosts();

async function renderPosts() {
  try {
    const posts = await getPosts({ page, perPage });

    if (posts.length === 0) {
      return;
    }

    const postsMarkup = createPostCards(posts);

    refs.list.innerHTML = postsMarkup;

    loadMoreButton.show();

    loadMoreButton.button.addEventListener('click', handleLoadMore);
  } catch (err) {
    console.log(err);
  }
}

async function handleLoadMore(event) {
  page += 1;
  loadMoreButton.disable();

  try {
    const posts = await getPosts({ page, perPage });

    if (posts.length === 0) {
      loadMoreButton.hide();
      loadMoreButton.button.removeEventListener('click', handleLoadMore);
      return;
    }

    const postsMarkup = createPostCards(posts);

    refs.list.insertAdjacentHTML('beforeend', postsMarkup);

    loadMoreButton.enable();
  } catch (err) {
    console.log(err);
    loadMoreButton.hide();
  }
}
