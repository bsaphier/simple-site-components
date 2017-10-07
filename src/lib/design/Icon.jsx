import React from 'react';
import './icon.scss';


export default ({icon, ...props}) => (
    <i className={`icon-${icon}`} {...props} />
);
