// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const button = document.querySelector(".main-button");
const searchFormEl = document.querySelector(".main-form");
const inputEl = document.querySelector(".main-input");
const galleryEl = document.querySelector(".js-list");

const createGalleryCard = (imgInfo) => {
    return ` <li class="gallery-card">
        <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
        <div class="gallery-info">
            <p><b>Likes:</b> ${imgInfo.likes}</p>
            <p><b>Views:</b> ${imgInfo.views}</p>
            <p><b>Comments:</b> ${imgInfo.comments}</p>
            <p><b>Downloads:</b> ${imgInfo.downloads}</p>
        </div>
    </li>`;
}

const onSearchFormSubmit = event => {
    event.preventDefault();
   
    const searchValue = inputEl.value.trim(); 
     
    if (searchValue === "") {
        iziToast.show({
            message: 'Будь ласка заповніть поле!',
            position: "topRight",
            color: 'red'
       }) 
    }
    
    fetch(`https://pixabay.com/api/?key=46112845-f959e042da8238bb9faecb37a&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
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
            
        })
        .catch(error => {
            console.log(error);
        });
    
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
