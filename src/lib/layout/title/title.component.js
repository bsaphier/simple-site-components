import React from 'react';
import './title.component.scss';


export default ({children}) => (
    <div className="title-wrapper">
        <div className="title-text">
            { children }
        </div>
    </div>
);
