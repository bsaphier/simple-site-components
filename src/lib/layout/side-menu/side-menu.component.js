import React from 'react';
import * as s from './side-menu.component.scss';


let align, burger;

export default ({left, open, children, ...props}) => {
    align  = left ? s.left : s.right;
    burger = open ? '' : s.hide;
    return (
        <div className={`${s['side-menu-wrapper']} ${s.hamburger} ${burger} ${align}`} {...props}>
            <div className={s['side-menu']}>
                { children }
            </div>
        </div>
    );
};
