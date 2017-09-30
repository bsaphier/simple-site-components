import React from 'react';
import * as s from './card.component.scss';


export default ({children, ...props}) => {
    return (
        <div className={s.card} {...props}>
            { children }
        </div>
    );
};
