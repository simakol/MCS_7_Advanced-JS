function createCardsMarkup(photos) {
  return photos
    .map(
      ({ alt_description, urls: { regular } }) => `<li class="gallery-card">
  <img class="gallery-img" src="${regular}" alt="${alt_description}" />
</li>`
    )
    .join('');
}

export { createCardsMarkup };
