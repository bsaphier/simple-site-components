import React from 'react';
import * as s from './title.scss';


export default ({children, className, style, ...props}) => (
    <div className={`${s.titleWrapper}`} {...props}>
        <div className={s.titleText} style={{...style}}>
            { children }
        </div>
    </div>
);
