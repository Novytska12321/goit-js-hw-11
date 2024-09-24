// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const button = document.querySelector(".main-button");
const searchFormEl = document.querySelector(".main-form");
const inputEl = document.querySelector(".main-input");
const galleryEl = document.querySelector(".js-list");
const loaderEl = document.querySelector(".loader")


import { createGalleryCard } from "./js/render-functions";
import { fetchPhotos } from "./js/pixabay-api";
const lightbox = new SimpleLightbox('.gallery-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
    event.preventDefault();
   
     
   
    const searchValue = inputEl.value.trim();
    if (searchValue === "") {
        iziToast.show({
            message: 'Будь ласка заповніть поле!',
            position: "topRight",
            color: 'red'
        })
        return;
    }
    loaderEl.classList.remove('is-hidden');
    fetchPhotos(searchValue)
        .then(data => {
            if (data.hits.length === 0) {
                return iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight",
                    color: 'red',
                })
                
            }
            const galleryMarkup = data.hits.map(createGalleryCard).join('');
            galleryEl.innerHTML = galleryMarkup;
            lightbox.refresh();
        })
        .catch(error => {
            console.log(error);
        })
     .finally(() => {
            
            loaderEl.classList.add('is-hidden');
        });
   searchFormEl.reset();
 
};
     

searchFormEl.addEventListener('submit', onSearchFormSubmit);
