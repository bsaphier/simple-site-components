import React from 'react';
import './icon.component.scss';


export default ({icon, ...props}) => (
    <i className={`icon-${icon}`} {...props} />
);
