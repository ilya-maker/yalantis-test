import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const Header = () => (
    <header className="header">
        <div className="container">
            <h1 className="header__title">
                Gallery
            </h1>
            <ul className="header__list">
                <li className="header__item">
                    <NavLink className="header__page link" to="/allImages">
                        All Images
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink className="header__page link" to="/addImage">
                        Add Image
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
);
