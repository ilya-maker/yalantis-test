import { createStore, AnyAction } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SET_PHOTOS, ADD_PHOTO, DELETE_ITEM } from './consts/consts';


export const getPhotos = (state: RootState) => state.photos;

export type RootState = {
    photos: Photo[];
};

const initialState: RootState = {
    photos: [],
};

const rootReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case SET_PHOTOS:
            return {
                photos: [...action.photos],
            };
        case DELETE_ITEM:
            return {
                ...state,
                photos: state.photos.filter(photo => photo.id !== action.deleteItem),
            };
        case ADD_PHOTO:
            return {
                ...state,
                photos: [...state.photos, action.photo]
            };
        default:
            return state;
    }
};

const store = createStore(
    rootReducer,
    composeWithDevTools(),
);

export default store;
