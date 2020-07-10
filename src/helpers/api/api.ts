const BASE_URL = 'https://jsonplaceholder.typicode.com/albums/1/photos';

export const getPhotosFropApi = () => {
    return fetch(`${BASE_URL}`)
        .then(response => response.json());
};
