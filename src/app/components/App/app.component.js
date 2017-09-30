import React from 'react';
import SSC from '../../../lib';
import env from '../../../../env';
import * as s from './app.component.scss';

const BtnA = SSC.buttons.BtnA;
const BtnB = SSC.buttons.BtnB;

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

function renderCards(numCards, numCells) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(
            <SSC.Card key={`card-${i}`} style={{padding: '24px', background: 'rgba(0,0,255,0.1)'}}>
                {`Card ${i + 1}`}
                {renderCells(numCells)}
            </SSC.Card>
        );
    }
    return cards;
}

function renderCells(num) {
    const cells = [];
    for (let i = 0; i < num; i++) {
        cells.push(
            <SSC.Cell key={`cell-${i}`} style={{margin: '5px', padding: '5px', background: 'rgba(0,0,255,0.1)'}}>
                {`Cell ${i + 1}`}
                <SSC.Title style={{padding: '5px 15px', background: 'rgba(0,0,255,0.1)'}}>Title</SSC.Title>
            </SSC.Cell>
        );
    }
    return cells;
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            showSideMenu: false,
            showSpinner: false
        };
        this.toggleModal  = this.toggleModal.bind(this);
        this.toggleBurger = this.toggleBurger.bind(this);
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

    render() {
        return this.state.showSpinner
            ? (<SSC.Spinner />)
            : (<SSC.Container>
                {!env.production && (<div className={s['c-list']}>{ showEnv() }<div id={s.divider} />{ listComponents(SSC) }</div>)}
                <SSC.Page style={{paddingTop: 0, background: 'rgba(0,0,255,0.1)'}}>
                    <SSC.SideMenu open={this.state.showSideMenu}>
                        SideMenu
                        <BtnA action={this.toggleModal}>Open Modal</BtnA>
                        <BtnA action={this.toggleBurger}>Hide Burger</BtnA>
                        {renderCards(1, 2)}
                    </SSC.SideMenu>
                    <SSC.PageContent style={this.state.showSideMenu ? {marginRight: '25%', background: '#fefefe'} : {background: '#fefefe'}}>
                        <BtnA action={this.toggleBurger}>Show Burger</BtnA>
                        {renderCards(6, 3)}
                        <SSC.Modal open={this.state.modalOpen} close={this.toggleModal}>
                            <div className={s.modal}>
                                {renderCards(1, 5)}
                                <BtnB action={this.toggleModal}>Close Modal</BtnB>
                            </div>
                        </SSC.Modal>
                    </SSC.PageContent>
                </SSC.Page>
                <SSC.Page>
                    <SSC.PageContent>
                        <SSC.Parallax layers={parallaxLayers}>
                            {(layer, i) => (
                                <div className={s.plaxLayer} style={{
                                    width: `${100 * (i + 1)}px`,
                                    height: `${100 * (i + 1)}px`,
                                    backgroundColor: layer.img}}>
                                    <SSC.TitleFx style={{fontSize: '64px', fontWeight: '900'}}>{layer.name}</SSC.TitleFx>
                                </div>
                            )}
                            </SSC.Parallax>
                    </SSC.PageContent>
                </SSC.Page>
                <SSC.Page style={{background: 'rgba(0,64,255,0.1)'}}>
                    <SSC.PageContent style={{background: 'rgba(0,64,255,0.1)'}}>PageContent</SSC.PageContent>
                </SSC.Page>
                <SSC.Footer style={{textAlign: 'center', background: 'rgba(0,255,255,0.1)'}}>Footer</SSC.Footer>
            </SSC.Container>
        );
    }
};
