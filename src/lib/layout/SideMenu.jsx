import React from 'react';
import * as s from './side-menu.scss';


let align, burger;

export default ({left, open, children, ...props}) => {
    align  = left ? s.left : s.right;
    burger = open ? '' : s.hide;
    return (
        <div className={`${s.sideMenuWrapper} ${s.hamburger} ${burger} ${align}`} {...props}>
            <div className={s.sideMenu}>
                { children }
            </div>
        </div>
    );
};
