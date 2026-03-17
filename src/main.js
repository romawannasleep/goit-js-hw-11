import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { createGallery } from "./js/render-functions";
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (e.target.elements['search-text'].value === "") {
        iziToast.error({
            title: 'Error',
        });
        return;
    }
    clearGallery();
    showLoader();

    getImagesByQuery(e.target.elements['search-text'].value).then(data => {
        
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
        createGallery(data.hits);
        }
    })
    .catch(error => {
        iziToast.error({
            title:'Error',
            message: `${error}`
        })
    })
    .finally(hideLoader)
    
});
