import React from 'react';
import * as s from './page-content.component.scss';


export default ({children, ...props}) => (
    <div className={s['page-content']} {...props}>{ children }</div>
);
