import React from 'react';
import * as s from './spinner.component.scss';

export default ({reverse, children}) => {
    let direction = reverse ? s.reverse : '';
    return (
        <div className={s.spinner}>
            <div className={s.container}>
                <span className={`${s.hexagon} ${s.hex0} ${direction}`} />
                <span className={`${s.hexagon} ${s.hex120} ${direction}`} />
                <span className={`${s.hexagon} ${s.hex240} ${direction}`} />
                { children }
            </div>
        </div>
    );
};
