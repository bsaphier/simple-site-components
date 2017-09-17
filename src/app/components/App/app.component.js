import React from 'react';
import SSC from 'src/lib';
import './app.component.scss';

export default () => (
    <div>
        <h1>{SSC.hello()}</h1>
    </div>
);