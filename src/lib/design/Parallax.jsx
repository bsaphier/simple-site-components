import React, { Component } from 'react';
import * as s from './parallax.scss';


/**
 * Properties:
 * layers: Array<{ img: string; name: string; }>
 *
 * Ex.
 * <Parallax layers={[...parallaxlayers]}>
 *     {(layer) => <img src={layer.img} alt={layer.name} />}
 * </Parallax>
 */
export default class Parallax extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mouse: { x: 0, y: 0},
            plxRect:  { width: 0, height: 0, top: 0, left: 0 }
        };
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleCallback  = this.handleCallback.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
    }

    handleMouseOut() {
        this.setState( state => ({ ...state, active: false, mouse: { x: 0, y: 0 } }));
    }

    handleMouseMove($event) {
        const { clientX, clientY } = $event;
        this.setState( state => ({ ...state, mouse: { x: clientX, y: clientY } }));
        this.handleCallback();
    }

    handleMouseEnter($event) {
        const { currentTarget } = $event;
        this.setState( state => ({ ...state, active: true, plxRect: currentTarget.getBoundingClientRect() }));
        this.handleCallback();
    }

    handleCallback() {
        if (typeof this.props.callback === 'function') {
            this.props.callback(this.state.mouse, this.state.plxRect);
        }
    }

    render() {
        const { mouse, active, plxRect } = this.state;
        const { top, left, width, height } = plxRect;
        const plxX = active ? (62 * (2 * (((mouse.y - top) / height) - 0.5))) % 360 : 0;
        const plxY = active ? (-62 * (2 * (((mouse.x - left) / width) - 0.5))) % 360 : 0;
        const plxMax = Math.max(Math.abs(plxX), Math.abs(plxY));
        return (
            <div
                className={s.background}
                onMouseEnter={this.handleMouseEnter}
                onMouseMove={this.handleMouseMove}
                onMouseOut={this.handleMouseOut}>
                {
                    this.props.layers.map( (layer, i) => {
                        const layerStyle = vendorStyleGen(
                            plxX,                     /* X */
                            plxY,                     /* Y */
                            Math.abs(plxMax * i * 2)  /* Z */
                        );
                        return (
                            <div key={layer.name} className={s.parallax} style={layerStyle}>
                                { this.props.children(layer, i) }
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}


function vendorStyleGen(x, y, z) {
    return {
        WebkitTransform: _makeTransform(x, y, z),
        MozTransform:    _makeTransform(x, y, z),
        MsTransform:     _makeTransform(x, y, z),
        OTransform:      _makeTransform(x, y, z),
        transform:       _makeTransform(x, y, z)
    };
}

function _makeTransform(x, y, z) {
    return `translate(-50%, -50%) rotateX(${x}deg) rotateY(${y}deg) translate3d(${x / 6}px, ${y / 6}px, ${z}px )`; // translate3d(${-x}px, ${-y}px, ${z}px )
}
