import React, { useEffect } from 'react';
import './App.scss';
import { PageCards } from "./components/PageCards";
import {Header} from "./components/Header";
import { PageAdd } from './components/PageAdd';
import { getPhotosFropApi } from './helpers/api/api';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getPhotos} from './helpers/store';
import {setPhotos} from './helpers/store/actions/addPhoto';


const App = () => {
    const dispatch = useDispatch();
    const photos = useSelector(getPhotos);

    useEffect(() => {
        if (localStorage.getItem('photos')) {
            const allPhotos = JSON.parse(localStorage.getItem('photos') || '');
            dispatch(setPhotos(allPhotos));
        } else {
            getPhotosFropApi()
                .then(data => dispatch(setPhotos(data)))
        }

    }, []);


    useEffect(() => {
        localStorage.setItem('photos', JSON.stringify(photos));
    }, [photos.length]);

    return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
            <Route
                exact
                path={["/allImages", "/"]}
                render={() => (
                    <PageCards/>
                )}
            />
            <Route
                exact
                path="/addImage"
                render={() => (
                    <PageAdd/>
                )}
            />
        </Switch>
      </main>
    </div>
  );
};

export default App;
