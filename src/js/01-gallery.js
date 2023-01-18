// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);
console.log(SimpleLightbox);
const containerGallery = document.querySelector('.gallery');
console.log(containerGallery);
const listGalleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(items) {
  return items
    .map(
      item => `
    <div class="gallery__item">
    <a class="gallery__item"
       href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>
</div>
    `
    )
    .join('');
}
containerGallery.insertAdjacentHTML('beforeend', listGalleryMarkup);
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});