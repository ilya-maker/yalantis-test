import React, { useState } from 'react';
import CN from 'classnames';
import './style.scss';
import {setDeleteItem} from "../../helpers/store/actions/deletePhoto";
import {useDispatch} from "react-redux";

interface Props {
    photo: Photo;
}

export const Card = ({ photo } : Props) => {
    const dispatch = useDispatch();
    const [showDesc, setShowDesc] = useState(false);
    const [showSetting, setShowSetting] = useState(false);

    const [colorText, setColorText] = useState('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState('#808080');
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [photoURL, setPhotoURL] = useState(photo.url);

    const handleHideSetting = () => {
        if (!showDesc) {
            setShowSetting(false);
        }
    };

    return (
         <button
             className="photo"
             onMouseLeave={() => {
                 setShowDesc(false);
                 setPositionY(0);
             }}
             onBlur={handleHideSetting}
             onMouseEnter={() => {
                 setShowDesc(true);
                 setPositionY(100 + positionY);
             }}
             onClick={() => setShowSetting(true)}
         >
         <div className={CN('photo__setting', {'photo__setting--show': showSetting})}>
             <div className="photo__change photo__changeColor">
                 <label htmlFor="colorText">Color Text</label>
                 <input
                     className="photo__input photo__inputColor"
                     type="color"
                     id="colorText"
                     value={colorText}
                     onChange={(event) => setColorText(event.target.value)}/>
             </div>
             <div className="photo__change photo__changeBG">
                 <label htmlFor="colorBG">Color BG</label>
                 <input
                     className="photo__input photo__inputBG"
                     type="color"
                     id="colorBG"
                     value={backgroundColor}
                     onChange={(event) => setBackgroundColor(event.target.value)}
                 />
             </div>
             <div className="photo__change photo__changeURL">
                 <label htmlFor={`changeURL${photo.id}`}>URL img</label>
                 <input
                     className="photo__input photo__changeURL"
                     type="text"
                     id={`changeURL${photo.id}`}
                     value={photoURL}
                     onChange={(event) => setPhotoURL(event.target.value)}
                 />
             </div>
             <div className="photo__change photo__changePosition">
                 <label htmlFor="positionX">Position X</label>
                 <input
                     value={positionX}
                     onChange={(event) => setPositionX(+event.target.value)}
                     className="photo__input photo__inputPosition"
                     type="number"
                     id="positionX"
                 />
                 <br/>
                 <label htmlFor="positionY">Y</label>
                 <input
                     value={positionY}
                     onChange={(event) => setPositionY(+event.target.value)}
                     className="photo__input photo__inputPosition"
                     type="number"
                     id="positionY"
                 />
             </div>
             <button
                 type="button"
                 className="photo__delete"
                 onClick={() => dispatch(setDeleteItem(photo.id))}
             >
                 &#10008;
             </button>
         </div>
         <img
             className="photo__img"
             alt={photo.title}
             src={photo.url}
         />
         <div style={{backgroundColor: `${backgroundColor}`, transform: `translate(${positionX}px, -${positionY}%)`}} className={CN('photo__description', {'photo__description--show': showDesc})}>
            <p style={{color: `${colorText}`}} className="photo__text">{photo.title}</p>
         </div>
         </button>
    )
};
