import React from 'react';
import * as s from './page.component.scss';


export default ({id, children, ...props}) => (
    <section className={s.page} id={id} {...props}>{ children }</section>
);
