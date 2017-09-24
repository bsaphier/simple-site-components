import React from 'react';
import * as s from './footer.component.scss';

export default ({children, ...props}) => (
    <footer className={s.footer} {...props}>
            <div className={s['footer-content']}>{ children }</div>
    </footer>
);
