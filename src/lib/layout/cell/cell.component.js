import React from 'react';
import { cell } from './cell.component.scss';

export default ({children, ...props}) => (
    <div className={cell} {...props}>
        { children }
    </div>
);
