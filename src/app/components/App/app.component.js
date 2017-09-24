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
        <SSC.Container>
            {!env.production && (<div className="c-list">{ showEnv() }<div id="divider" />{ listComponents(SSC) }</div>)}
            <SSC.Page>
                <SSC.SideMenu burger={{open: true}}>
                    SideMenu
                </SSC.SideMenu>
                <SSC.FillPage>
                    FillPage
                    <SSC.Cell style={{padding: '20px', background: 'rgba(64,0,255,0.3)'}}>
                        <SSC.Title>Title</SSC.Title>
                        Cell
                    </SSC.Cell>
                </SSC.FillPage>
            </SSC.Page>
            <SSC.Page>
                <SSC.FillPage style={{background: 'rgba(0,64,255,0.3)'}}>FillPage</SSC.FillPage>
            </SSC.Page>
            <SSC.Footer>Footer</SSC.Footer>
        </SSC.Container>
    );
};
