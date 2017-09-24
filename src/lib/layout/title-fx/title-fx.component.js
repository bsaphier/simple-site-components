import React from 'react';
import * as s from './title-fx.component.scss';

export default ({children, ...props}) => {
    return (
        <div className={s['title-wrapper']} {...props}>{ children }</div>
    );
};
