import React from 'react';
import SSC from 'src/lib';
import env from 'env';
import './app.component.scss';


function showEnv() {
    return Object.keys(env).map(key => (
        <h2 key={key}>{`${key}: ${env[key]}`}</h2>
    ));
}

export default () => {
    return (
        <div>
            <h1>{SSC.hello()}</h1>
            { !env.production && showEnv() }
        </div>
    );
};
