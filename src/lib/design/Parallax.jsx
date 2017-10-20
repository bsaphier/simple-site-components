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
            mouse: { x: 0, y: 0},
            plxRect:  { width: 0, height: 0, top: 0, left: 0 }
        };
        this.handleSize = this.handleSize.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove($event) {
        const { clientX, clientY } = $event;
        this.setState( state => ({ ...state, mouse: { x: clientX, y: clientY } }));
    }

    handleSize($event) {
        const { currentTarget } = $event;
        this.setState( state => ({ ...state, plxRect: currentTarget.getBoundingClientRect() }));
    }

    render() {
        const { mouse, plxRect } = this.state;
        const { top, left, width, height } = plxRect;
        const plxX = (62 * (2 * (((mouse.y - top) / height) - 0.5))) % 360;
        const plxY = (-62 * (2 * (((mouse.x - left) / width) - 0.5))) % 360;
        const plxMax = Math.max(Math.abs(plxX), Math.abs(plxY));
        return (
            <div className={s.background} onMouseEnter={this.handleSize} onMouseMove={this.handleMouseMove}>
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
