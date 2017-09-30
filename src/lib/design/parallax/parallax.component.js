import React, { Component } from 'react';
import * as s from './parallax.component.scss';

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
            size:  { width: 0, height: 0 }
        };
        this.getElement = this.getElement.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    componentDidMount() {
        this.domNode.addEventListener( 'resize', this.handleResize);
        this.domNode.addEventListener( 'mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
        this.domNode.removeEventListener( 'resize', this.handleResize);
        this.domNode.removeEventListener( 'mousemove', this.handleMouseMove);
    }

    handleMouseMove(event) {
        const { clientX, clientY } = event;
        this.setState( state => ({
            ...state,
            mouse: {
                x: clientX,
                y: clientY
            }
        }));
    }

    handleResize() {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.domNode;
        console.log(offsetLeft, offsetTop, offsetWidth, offsetHeight);
        // console.log(offsetWidth - offsetLeft, offsetHeight - offsetTop);
        this.setState( state => ({
            ...state,
            size: {
                width: offsetWidth,
                height: offsetHeight
            }
        }));
    }

    getElement(ref) {
        this.domNode = ref;
        this.handleResize();
    }

    render() {
        const { mouse, size } = this.state;
        // const rotateX = (mouse.y) % 10;
/*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*/
// TODO: if env.production is false...
console.log(`*~*~*~*~*~*~*~*~*~*
RENDER:
mX: ${mouse.x}, mY: ${mouse.y}
width: ${size.width}, height: ${size.height}
*~*~*~*~*~*~*~*~*~*`);
/*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*/
        const layerStyle = {
            transform: `rotateX(${((mouse.x) % 360)}deg)
                        rotateY(${((mouse.y) % 360)}deg)`
        };
        return (
            <div className={s.background} ref={this.getElement}>
                {
                    this.props.layers.map( (layer, i) => {
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
