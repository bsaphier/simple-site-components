import React from 'react';
import './spinner.component.scss';

export default ({reverse, children}) => {
    let direction = reverse ? 'reverse' : '';
    return (
        <div className="spinner">
            <div className="container">
                <span className={`hexagon hex-0 ${direction}`} />
                <span className={`hexagon hex-120 ${direction}`} />
                <span className={`hexagon hex-240 ${direction}`} />
                { children }
            </div>
        </div>
    );
};
