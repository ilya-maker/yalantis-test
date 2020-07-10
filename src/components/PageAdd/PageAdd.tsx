import React, { useState } from 'react';
import './style.scss';
import {setAddPhoto} from "../../helpers/store/actions/addPhoto";
import store from '../../helpers/store'
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";


export const PageAdd = () => {
    const dispatch = useDispatch();
    const [postTitle, setPostTitle] = useState('');
    const [postURL, setPostBody] = useState('');
    const history = useHistory();
    const allPhotos = store.getState().photos;



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!postTitle || !postURL) {
            return;
        }

        if (!postTitle.trim() || !postURL.trim()) {
            return;
        }

        dispatch(setAddPhoto({
            title: postTitle,
            url: postURL,
            id: allPhotos.length + 1
        }));
        console.log(allPhotos);
        localStorage.setItem('photos', JSON.stringify(allPhotos));
        history.push("/allImages");
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form__block form__title">
                    <label htmlFor="title">Title</label>
                    <textarea
                        className="form__input form__input--title"
                        id="title"
                        value={postTitle}
                        onChange={(event) => setPostTitle(event.target.value)}
                    />
                </div>
                <div className="form__block form__url">
                    <label htmlFor="url">URL</label>
                    <input
                        className="form__input form__input--url"
                        type="text"
                        id="url"
                        value={postURL}
                        onChange={(event) => setPostBody(event.target.value)}
                    />
                </div>
                <button
                    className="form__btn"
                    type="submit"
                    name="Send post"
                    id="send-post"
                    disabled={!postTitle && !postURL}
                    onClick={handleSubmit}
                >
                    Send post
                </button>
            </form>
        </div>
    );
};
