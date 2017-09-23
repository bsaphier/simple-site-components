import React from 'react';
import './footer.component.scss';

export default ({children}) => (
    <footer>
        <div className="footer">
            <div className="credit">{ children }</div>
        </div>
    </footer>
);
