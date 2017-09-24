import React from 'react';
import SSC from '../../../lib';
import env from '../../../../env';
import * as s from './app.component.scss';


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
    const showSpinner = false;
    return (
        <SSC.Container>
            {!env.production && (<div className={s['c-list']}>{ showEnv() }<div id={s.divider} />{ listComponents(SSC) }</div>)}
            <SSC.Page style={{paddingTop: 0, boxSizing: 'border-box', maxHeight: '100vh'}}>
                <SSC.SideMenu burger={{open: true}}>
                    SideMenu
                </SSC.SideMenu>
                <SSC.PageContent>
                    PageContent
                    <SSC.Cell style={{padding: '20px', background: 'rgba(64,0,255,0.3)'}}>
                        Cell
                        <SSC.Title>Title</SSC.Title>
                    </SSC.Cell>
                    { showSpinner && <SSC.Spinner /> }
                </SSC.PageContent>
            </SSC.Page>
            <SSC.Page>
                <SSC.PageContent style={{background: 'rgba(0,64,255,0.3)'}}>PageContent</SSC.PageContent>
            </SSC.Page>
            <SSC.Footer style={{textAlign: 'center'}}>Footer</SSC.Footer>
        </SSC.Container>
    );
};
