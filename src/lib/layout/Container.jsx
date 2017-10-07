import React from 'react';
import { container } from './container.scss';

export default ({children, ...props}) => (
    <div className={container} {...props}>{ children }</div>
);
