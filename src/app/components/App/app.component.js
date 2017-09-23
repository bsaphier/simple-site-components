import React from 'react';
import SSC from 'src/lib';
import env from 'env';
import './app.component.scss';


const listComponents = (lib, names) => {
    const cList = [];
    for (let key in lib) {
        if (lib.hasOwnProperty(key)) {
            cList.push({ name: key, obj: lib[key] });
        }
    }
    cList.shift(); // first item in the array is SSC.default
    return cList.map(c => (
        <span className="name" key={c.name}>{`• ${c.name}`}<br/></span>
    ));
};

const showEnv = () => Object.keys(env).map(key => (
    <span key={key}>{`${key}: ${env[key]}`}</span>
));

export default () => {
    return (
        <div className="full-page">
            <SSC.SideMenu burger={{open: true}}>STUFFFF</SSC.SideMenu>
            <div className="c-list">
                { !env.production && showEnv() }
                <div id="divider" />
                { listComponents(SSC) }
            </div>
        </div>
    );
};
