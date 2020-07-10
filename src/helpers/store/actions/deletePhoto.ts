import { DELETE_ITEM } from '../consts/consts';

export const setDeleteItem = (deleteItem: number) => ({
    type: DELETE_ITEM,
    deleteItem,
});
