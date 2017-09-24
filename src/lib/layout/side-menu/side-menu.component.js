import React from 'react';
import * as s from './side-menu.component.scss';


let align, burger;

export default ({children, ...props}) => {
    align  = (props.left) ? s.left : s.right;
    burger = (props.burger && props.burger.open) ? s.hamburger : `${s.hamburger} ${s.hide}`;
    return (
        <div className={`${s['side-menu-wrapper']} ${burger} ${align}`}>
            <div className={s['side-menu']}>
                { children }
            </div>
        </div>
    );
};
