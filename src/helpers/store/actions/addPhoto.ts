import { SET_PHOTOS, ADD_PHOTO } from '../consts/consts';

export const setPhotos = (photos: Photo[]) => ({
    type: SET_PHOTOS,
    photos,
});

export const setAddPhoto = (photo: Photo) => ({
    type: ADD_PHOTO,
    photo,
});
