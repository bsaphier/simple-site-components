import React from 'react';
import Page from '../page/page.component.js';
import Hexagon from './hexagon.component.js';
import './spinner.component.scss';

export default () => (
    <Page>
        <div className="preloader">
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
