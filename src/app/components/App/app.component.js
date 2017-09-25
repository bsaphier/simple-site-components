import React from 'react';
import SSC from '../../../lib';
import env from '../../../../env';
import * as s from './app.component.scss';


const showSpinner = false;
const showSideMenu = false;
const numCells = 8;
const cells = [];

for (let i = 0; i < numCells; i++) {
    cells.push(
        <SSC.Cell key={`cell-${i}`} style={{padding: '24px', background: 'rgba(0,0,255,0.1)'}}>
            {`Cell ${i + 1}`}
            <SSC.Title style={{padding: '5px 15px', background: 'rgba(0,0,255,0.1)'}}>Title</SSC.Title>
        </SSC.Cell>
    );
}

const listComponents = (lib, names) => {
    const cList = [];
    for (let key in lib) {
        if (lib.hasOwnProperty(key)) {
            cList.push({ name: key, obj: lib[key] });
        }
    }
    cList.shift(); // first item in the array is SSC.default
    return cList.map(c => (
        <span className={s.name} key={c.name}>{`• ${c.name}`}<br /></span>
    ));
};

const showEnv = () => Object.keys(env).map(key => (
    <span key={key}>{`${key}: ${env[key]}`}</span>
));

export default () => {
    return (
        <SSC.Container>
            { showSpinner && <SSC.Spinner /> }
            {!env.production && (<div className={s['c-list']}>{ showEnv() }<div id={s.divider} />{ listComponents(SSC) }</div>)}
            <SSC.Page style={{paddingTop: 0, boxSizing: 'border-box', background: 'rgba(0,0,255,0.1)'}}>
                <SSC.SideMenu open={showSideMenu}>SideMenu</SSC.SideMenu>
                <SSC.PageContent style={{background: 'rgba(0,0,255,0.1)'}}>
                    {cells}
                    <SSC.TitleFx style={{fontSize: '64px', fontWeight: '900'}}>TitleFx</SSC.TitleFx>
                </SSC.PageContent>
            </SSC.Page>
            <SSC.Page style={{background: 'rgba(0,64,255,0.1)'}}>
                <SSC.PageContent style={{background: 'rgba(0,64,255,0.1)'}}>PageContent</SSC.PageContent>
            </SSC.Page>
            <SSC.Footer style={{textAlign: 'center', background: 'rgba(0,255,255,0.1)'}}>Footer</SSC.Footer>
        </SSC.Container>
    );
};
