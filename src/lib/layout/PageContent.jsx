import React from 'react';
import * as s from './page-content.scss';


export default ({children, ...props}) => (
    <div className={s.pageContent} {...props}>{ children }</div>
);
