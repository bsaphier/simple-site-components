import React from 'react';
import './side-menu.component.scss';


let align, burger;

export default ({children, ...props}) => {
    align  = (props.left) ? 'left' : 'right';
    burger = (props.burger && props.burger.open) ? 'hamburger' : 'hamburger hide';
    return (
        <div className={`side-menu-wrapper ${burger} ${align}`}>
            <div className="side-menu">
                { children }
            </div>
        </div>
    );
};
