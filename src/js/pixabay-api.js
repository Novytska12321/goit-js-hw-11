const BASE_URL = 'https://pixabay.com';
export const fetchPhotos = (searchValue) => {
    const urlParams = new URLSearchParams({
        q: searchValue,
        image_type: 'photos',
        orientation: 'horizontal',
        safesearch: true,
        key: '46112845-f959e042da8238bb9faecb37a',
    })
  return  fetch(`${BASE_URL}/api/?${urlParams}`)
.then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
}