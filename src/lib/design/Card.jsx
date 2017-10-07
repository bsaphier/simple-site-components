import React from 'react';
import * as s from './card.scss';


export default ({children, ...props}) => {
    return (
        <div className={s.card} {...props}>
            { children }
        </div>
    );
};
