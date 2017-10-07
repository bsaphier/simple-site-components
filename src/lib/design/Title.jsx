import React from 'react';
import * as s from './title.scss';


export default ({children, ...props}) => (
    <div className={s.titleWrapper} {...props}>
        <div className={s.titleText}>
            { children }
        </div>
    </div>
);
