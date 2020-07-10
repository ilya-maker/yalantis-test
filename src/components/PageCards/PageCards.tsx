import React, {useMemo} from 'react';
import './style.scss';
import { Card } from '../Card';

import {useSelector} from "react-redux";
import {getPhotos} from "../../helpers/store";

export const PageCards = () => {

    const photos = useSelector(getPhotos);

    const sortedPhotos = useMemo(() => [...photos].sort((a, b) => b.id - a.id),[photos]);

    return(
        <div className="container">
            <div className="cards">
                {sortedPhotos ? sortedPhotos.map(item => <Card key={item.id}  photo={item}/>) : ''}
            </div>
        </div>
    )
};
