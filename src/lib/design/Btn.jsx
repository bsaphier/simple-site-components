import React, { Component } from 'react';
import * as s from './btn.scss';

export default class Btn extends Component {

    get className() {
        let _className = `${s.btn} `;
        switch (this.props.type) {
            case 'A':
                _className += s.btnA;
                break;
            case 'B':
                _className += s.btnB;
                break;
            default:
                break;
        }
        return _className;
    }

    constructor(props) {
        super(props);
        this.state = {up: false};
        this.buttonUp = this.buttonUp.bind(this);
        this.buttondown = this.buttondown.bind(this);
    }

    buttonUp() {
        this.setState({ up: true });
    }

    buttondown() {
        this.setState({ up: false });
    }

    render () {
        const { style, action, children } = this.props;
        return (
            <div
                className={this.className}
                style={style}
                onClick={action}
                onMouseUp={this.buttonUp}
                onMouseOut={this.buttonUp}
                onMouseDown={this.buttondown}
                onMouseOver={this.buttondown}>
                { children( this.state.up ) }
            </div>
        );
    }
}
