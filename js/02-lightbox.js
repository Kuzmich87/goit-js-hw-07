import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('ul.gallery');
console.log(galleryRef);


function onCreateImgCard(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                     class="gallery__image"
                     src="${preview}"
                     data-source="${original}"
                     alt="${description}"
                  />
            </a>
         </div>`
    })
        .join('');
};
const imgGallery = onCreateImgCard(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgGallery);

new SimpleLightbox('ul.gallery a', {
  overlayOpacity: 0.9,
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
  alertError: false,
  maxZoom: 5,
});

console.log(galleryRef); 