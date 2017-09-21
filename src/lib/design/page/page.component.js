import React from 'react';
import './page.component.scss';

export default ({id, children}) => (
    <section className="page" id={id}>{ children }</section>
);
