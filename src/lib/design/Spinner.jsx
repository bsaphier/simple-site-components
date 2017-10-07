import React from 'react';
import Page from '../layout/Page.jsx';
import Hexagon from './Hexagon.jsx';
import { preloader } from './spinner.scss';

export default (props) => (
    <Page {...props}>
        <div className={preloader}>
            <Hexagon reverse>
                <Hexagon>
                    <Hexagon reverse>
                        <Hexagon>
                            <Hexagon />
                        </Hexagon>
                    </Hexagon>
                </Hexagon>
            </Hexagon>
        </div>
    </Page>
);
