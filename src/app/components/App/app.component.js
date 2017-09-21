import React from 'react';
import SSC from 'src/lib';
import env from 'env';
import './app.component.scss';


function showEnv() {
    return Object.keys(env).map(key => (
        <h2 key={key}>{`${key}: ${env[key]}`}</h2>
    ));
}

const listObject = (obj) => {
    const cList = [];
    for (let key in obj) {
        cList.push({name: key, obj: obj[key]});
    }
    return cList.map(key => {
        // const Com = SSC[key.name];
        return (
            <div key={key.name}>
                <span className="name">{key.name}</span>
                {key.name === 'Spinner' ? <SSC.Spinner /> : ''}
            </div>
        );
    });
};

export default () => {
    return (
        <div>
            { !env.production && showEnv() }
            <div>
                { listObject(SSC) }
            </div>
        </div>
    );
};
