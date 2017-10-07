import React from 'react';
import * as s from './footer.scss';

export default ({children, ...props}) => (
    <footer className={s.footer} {...props}>
            <div className={s.footerContent}>{ children }</div>
    </footer>
);
