import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const photoCardsMarkup = createGalleryCardsMarkup(galleryItems);

let imageSrc = '';
let createOpenOriginalPhoto;

galleryContainer.insertAdjacentHTML('beforeend', photoCardsMarkup);
galleryContainer.addEventListener('click', onPhotoCardsClick);

function createGalleryCardsMarkup(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join('');
}

function onPhotoCardsClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  imageSrc = event.target.dataset.source;

  galleryContainer.onclick = () => {
    createOpenOriginalPhoto.onclick = basicLightbox
      .create(
        `
    <img width="1400" height="900" src="${imageSrc}">`,
      )
      .show();
  };
}

console.log(galleryItems);
