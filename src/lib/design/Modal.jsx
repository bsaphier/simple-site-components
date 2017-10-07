import React from 'react';
import * as s from './modal.scss';


export default ({open, close, children}) => {

    const handleBackgroundClick = event => {
        if (close && event.target === event.currentTarget) {
            close();
        }
    };

    return open && (
        <div className={s.modalBack} onClick={handleBackgroundClick}>
            <div className={s.modal}>
                { children }
            </div>
        </div>
    );
};
