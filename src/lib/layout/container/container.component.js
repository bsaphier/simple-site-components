import React from 'react';
import { container } from './container.component.scss';

export default ({children}) => (
    <div className={container}>{ children }</div>
);
