import React from 'react';
import './cell.component.scss';

export default ({children, ...props}) => (
    <div className="cell" {...props}>
        { children }
    </div>
);
