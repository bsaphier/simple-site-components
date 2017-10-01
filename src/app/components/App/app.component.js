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
            <SSC.Card key={`card-${i}`} style={{background: 'rgba(0,0,255,0.1)'}}>
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
            <SSC.Cell key={`cell-${i}`} style={{background: 'rgba(0,0,255,0.1)'}}>
                {`Cell ${i + 1}`}
                <SSC.Title style={{background: 'rgba(0,0,255,0.1)'}}>Title</SSC.Title>
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
                        <SSC.Card>
                            <BtnB action={this.toggleModal}>Open Modal</BtnB>
                            <BtnA action={this.toggleBurger}>Hide Burger</BtnA>
                        </SSC.Card>
                        {renderCards(2, 3)}
                    </SSC.SideMenu>
                    <SSC.PageContent style={this.state.showSideMenu ? {marginRight: '25%', background: '#fefefe'} : {background: '#fefefe'}}>
                        <SSC.Cell><BtnA action={this.toggleBurger}>Show Burger</BtnA></SSC.Cell>
                        {renderCards(6, 1)}
                        <SSC.Cell><BtnB action={this.toggleModal}>Open Modal</BtnB></SSC.Cell>
                    </SSC.PageContent>
                    <SSC.Modal open={this.state.modalOpen} close={this.toggleModal}>
                        {renderCards(1, 5)}
                        <BtnB action={this.toggleModal}>Close Modal</BtnB>
                        {renderCells(1)}
                    </SSC.Modal>
                </SSC.Page>
                <SSC.Page>
                    <SSC.PageContent>
                        <SSC.Parallax layers={parallaxLayers}>
                            {(layer, i) => (
                                <div className={s.plaxLayer} style={{
                                    margin: `${100 * (i + 1)}px`,
                                    width: `${200 * (parallaxLayers.length - i)}px`,
                                    height: `${150 * (parallaxLayers.length - i)}px`,
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
}
