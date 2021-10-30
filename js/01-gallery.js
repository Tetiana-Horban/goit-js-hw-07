import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const photoCardsMarkup = createGalleryCardsMarkup(galleryItems);

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
  const createOpenOriginalPhoto = basicLightbox
    .create(
      `
    <img width="1400" height="900" src="${event.target.dataset.source}">`,
    )
    .show();
}

console.log(galleryItems);

// Второй вариант выполнения дз
// Добавлено закрытие карусели Escape, перелистывание кнопками вправо и влево
// Делали на доп занитии 30.10.2021

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// let currentIndex = 0;

// const galeryElementsRefs = document.querySelector('.gallery');

// const createGalleryItems = galleryItems
//     .map(({ preview, original, description  }, index) => {
//     return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}" data-lightbox="roadtrip">
//     <img class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       data-index="${index}"
//       alt="${description}"/>
//   </a>
// </div>`;
//     })
//     .join('');

// galeryElementsRefs.insertAdjacentHTML('beforeend', createGalleryItems);

// galeryElementsRefs.addEventListener('click', hendleGalleryClick);

// const options = {
//   onShow: () => {
//     window.addEventListener('keydown', handleKeydown);

//   },
//   onClose: () => {
//     window.removeEventListener('keydown', handleKeydown);

//   },
// };

// const instance = basicLightbox.create(`
//     <div class="modal">
//        <img width="1400" height="900"
//        src="">
//     </div>`, options);

// function hendleGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') return;

//   // const getUrlImage = event.target.dataset.source;
//   // console.log(getUrlImage);
//   setOriginalUrl(event.target.dataset.source);
//   currentIndex = Number(event.target.dataset.index);

//   instance.show();

// }

// function handleKeydown({key}) {
//   switch (key) {
//     case 'ArrowRight':
//       currentIndex += 1;

//       if (currentIndex >= galleryItems.length) {
//         currentIndex = 0;
//       }

//       setOriginalUrl(galleryItems[currentIndex].original);
//       break;
//     case 'ArrowLeft':
//       currentIndex -= 1;

//       if (currentIndex <= 0) {
//         currentIndex = galleryItems.length - 1;
//       }

//       setOriginalUrl(galleryItems[currentIndex].original);
//       break;

//     case 'Escape':
//       instance.close();
//       break;

//     default:
//       alert('Что-то пошло не так!');
//   }

// }
// function setOriginalUrl(url) {
//   instance.element().querySelector("img").src = url;
//   return;
//   }
