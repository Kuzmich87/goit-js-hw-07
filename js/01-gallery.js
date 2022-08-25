import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('div.gallery');



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

// Делегирование

galleryRef.addEventListener('click', createGalleryMarkup);

let instance = null;

function createGalleryMarkup(event) {
    event.preventDefault();
     if (!event.target.classList.contains(`gallery__image`)) {  // если элемент не содержит данного класса то выход
        return;
    }
    const currentImgUrl = event.target.dataset.source;
     instance = basicLightbox.create(
                `<img class="modal__image" src="${currentImgUrl}" />`);
    instance.show();
    window.addEventListener('keydown', onKeyPress);
}
function onKeyPress(event) {
    const ESC_KEY_CODE = `Escape`;
    const isKeyCode = event.code === ESC_KEY_CODE;
    
    if (isKeyCode) {
        instance.close();
        window.removeEventListener('keydown', onKeyPress);
    }
}
console.log(galleryItems);







