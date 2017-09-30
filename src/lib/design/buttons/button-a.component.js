import React, { Component } from 'react';
import * as s from './buttons.scss';

export default class BtnA extends Component {
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
                className={`${s.btn} ${s.btnA}`}
                style={style}
                onClick={action}
                onMouseUp={this.buttonUp}
                onMouseOut={this.buttonUp}
                onMouseDown={this.buttondown}
                onMouseOver={this.buttondown}>
                { children }
            </div>
        );
    }
}
