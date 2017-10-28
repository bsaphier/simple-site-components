import React from 'react';
import SSC from '../../lib';
import env from '../../../env';
import * as s from './app.scss';


const parallaxLayers = [
    {
        img: 'rgba(255,192,255,0.2)',
        name: 'img1-name'
    }, {
        img: 'rgba(255,192,255,0.2)',
        name: 'img2-name'
    }, {
        img: 'rgba(255,192,255,0.2)',
        name: 'img3-name'
    }, {
        img: 'rgba(255,192,255,0.2)',
        name: 'img4-name'
    }, {
        img: 'rgba(255,192,255,0.2)',
        name: 'img5-name'
    }
];

function listComponents(lib) {
    const cList = [];
    for (let key in lib) {
        if (lib.hasOwnProperty(key)) {
            cList.push({ name: key });
        }
    }
    cList.shift(); // first item in the array is SSC.default
    return cList.map(c => (
        <span className={s.name} key={c.name}>{c.name}</span>
    ));
}

function showEnv() {
    return Object.keys(env).map(
        key => (<span className={s.header} key={key}>{`${key}: ${env[key]}`}</span>)
    );
}

function renderCards(numCards, numCells) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(
            <SSC.Card key={`card-${i}`} title={`Card ${i + 1}`} style={{background: 'rgba(0,0,255,0.1)'}}>
                {() => renderCells(numCells)}
            </SSC.Card>
        );
    }
    return cards;
}

function renderCells(num) {
    const cells = [];
    for (let i = 0; i < num; i++) {
        cells.push(
            <SSC.Cell key={`cell-${i}`} style={{background: 'rgba(0,0,255,0.1)'}}>
                <SSC.Title style={{background: 'rgba(0,0,255,0.1)'}}>{`Title: Cell ${i + 1}`}</SSC.Title>
                <div className={s.cellContent}>{`Cell Content: Cell ${i + 1}`}</div>
            </SSC.Cell>
        );
    }
    return cells;
}

function dummyLoad(fn, time) {
    return setTimeout(fn, time);
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            showSideMenu: false,
            showSpinner: true,
        };
        this.onLoad  = this.onLoad.bind(this);
        this.plxCB  = this.plxCB.bind(this);
        this.toggleModal  = this.toggleModal.bind(this);
        this.toggleBurger = this.toggleBurger.bind(this);
    }

    componentDidMount() {
        dummyLoad(this.onLoad, 300);
    }

    onLoad() {
        this.setState(state => ({ ...state, showSpinner: false }));
    }

    toggleModal() {
        this.setState(state => ({
            ...state,
            modalOpen: !state.modalOpen
        }));
    }

    toggleBurger() {
        this.setState(state => ({
            ...state,
            showSideMenu: !state.showSideMenu
        }));
    }

    plxCB(mouse, plxRect) {
        console.log(mouse, plxRect);
    }

    render() {
        return this.state.showSpinner
            ? (<SSC.PageContent><SSC.Spinner /></SSC.PageContent>)
            : (<SSC.Container>
                {!env.production && (<div className={s.libList}>{ showEnv() }<div id={s.divider} />{ listComponents(SSC) }</div>)}
                <SSC.Page style={{paddingTop: 0, background: 'rgba(0,0,255,0.1)'}}>
                    <SSC.SideMenu open={this.state.showSideMenu}>
                        SideMenu
                        <SSC.Card>
                            {() => [
                                <SSC.Btn key={'btna001'} type={'A'} action={this.toggleModal}>{() => 'Open Modal'}</SSC.Btn>,
                                <SSC.Btn key={'btnb001'} type={'A'} action={this.toggleBurger}>{() => 'Hide Burger'}</SSC.Btn>
                            ]}
                        </SSC.Card>
                        {renderCards(2, 3)}
                    </SSC.SideMenu>
                    <SSC.PageContent style={{background: '#fefefe'}}>
                        <SSC.Card title={'Card Title'} expandable>
                            {() => [
                                <SSC.Btn key={'btna002'} type={'B'} action={this.toggleBurger}>{() => 'Show Burger'}</SSC.Btn>,
                                <SSC.Btn key={'btnb002'} type={'B'} action={this.toggleModal}>{() => 'Open Modal'}</SSC.Btn>
                            ]}
                        </SSC.Card>
                        <span className={s.customCard}>
                            <SSC.Card title={'EXPANDABLE Card'} expandable>
                                {(clicked, isFoot) => {
                                    if (!isFoot) {
                                        return (
                                            <div className={clicked ? `${s.cardContent} ${s.clicked}` : s.cardContent}>
                                                <SSC.Title className={s.customTitle} style={{ background: 'rgba(0,0,255,0.1)' }}>{'A Custom SSC.Title'}</SSC.Title>
                                                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
                                            </div>
                                        );
                                    } else {
                                        return (<div className={s.customCardFooter}>{'This is a Custom Footer!'}</div>);
                                    }
                                }}
                            </SSC.Card>
                        </span>
                        {renderCards(5, 1)}
                    </SSC.PageContent>
                    <SSC.Modal open={this.state.modalOpen} close={this.toggleModal}>
                        {renderCards(1, 3)}
                        <SSC.Btn type={'B'} action={this.toggleModal}>{() => 'Close Modal'}</SSC.Btn>
                        {renderCells(1)}
                    </SSC.Modal>
                </SSC.Page>
                <SSC.Page>
                    <SSC.PageContent>
                        <div className={s.plxWrap}>
                            <SSC.Parallax layers={parallaxLayers} callback={this.plxCB}>
                                {(layer, i) => (
                                    <div
                                        className={s.plaxLayer}
                                        style={{
                                            width: `${50 + (parallaxLayers.length - i)}vw`,
                                            height: `${65 - (parallaxLayers.length - i)}vh`,
                                            backgroundColor: layer.img
                                        }}>
                                        <SSC.TitleFx style={{fontSize: '64px', fontWeight: '100'}}>{i + 1}</SSC.TitleFx>
                                    </div>
                                )}
                            </SSC.Parallax>
                        </div>
                    </SSC.PageContent>
                </SSC.Page>
                <SSC.Page style={{background: 'rgba(0,64,255,0.1)'}}>
                    <SSC.PageContent style={{background: 'rgba(0,64,255,0.1)'}}>PageContent</SSC.PageContent>
                </SSC.Page>
                <SSC.Footer style={{textAlign: 'center', background: 'rgba(0,255,255,0.1)'}}>Footer</SSC.Footer>
            </SSC.Container>
        );
    }
}
