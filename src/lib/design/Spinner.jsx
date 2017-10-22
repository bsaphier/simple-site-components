import React from 'react';
import Page from '../layout/Page.jsx';
import Hexagon from './Hexagon.jsx';
import { preloader } from './spinner.scss';

export default (props) => {
    const color = (typeof props.color === 'string') ? props.color : 'rgb(255, 64, 64)';
    return (
        <Page {...props}>
            <div className={preloader}>
                <Hexagon color={color} reverse>
                    <Hexagon color={color}>
                        <Hexagon color={color} reverse>
                            <Hexagon color={color}>
                                <Hexagon color={color} />
                            </Hexagon>
                        </Hexagon>
                    </Hexagon>
                </Hexagon>
            </div>
        </Page>
    );
}
