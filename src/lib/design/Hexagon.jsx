import React from 'react';
import * as s from './spinner.scss';

export default ({color, reverse, children}) => {
    let direction = reverse ? s.reverse : '';
    return (
        <div className={s.spinner}>
            <div className={s.container}>
                <span
                    className={`${s.hexagon} ${s.hex0} ${direction}`}
                    style={{
                        borderLeft: `3px solid ${color}`,
                        borderRight: `3px solid ${color}`
                    }} />
                <span
                    className={`${s.hexagon} ${s.hex120} ${direction}`}
                    style={{
                        borderLeft: `3px solid ${color}`,
                        borderRight: `3px solid ${color}`
                    }} />
                <span
                    className={`${s.hexagon} ${s.hex240} ${direction}`}
                    style={{
                        borderLeft: `3px solid ${color}`,
                        borderRight: `3px solid ${color}`
                    }} />
                { children }
            </div>
        </div>
    );
};
