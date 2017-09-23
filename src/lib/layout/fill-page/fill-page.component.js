import React from 'react';
import './fill-page.component.scss';


export default ({children, ...props}) => (
    <div className="fill-page" {...props}>{ children }</div>
);
