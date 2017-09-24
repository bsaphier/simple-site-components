import React from 'react';
import * as s from './fill-page.component.scss';


export default ({children, ...props}) => (
    <div className={s['fill-page']} {...props}>{ children }</div>
);
