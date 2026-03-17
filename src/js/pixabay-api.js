import axios, { Axios } from "axios";
const URL = "https://pixabay.com/api/";
export function getImagesByQuery(query) {
    return axios.get(URL, {
    params: {
        key: "55023028-a47613c23fe5e51542ebeaaa1",
        q: `${query}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    }
}).then(response => response.data)
};