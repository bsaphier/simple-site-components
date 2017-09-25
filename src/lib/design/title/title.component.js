import React from 'react';
import * as s from './title.component.scss';


export default ({children, ...props}) => (
    <div className={s['title-wrapper']} {...props}>
        <div className={s['title-text']}>
            { children }
        </div>
    </div>
);
