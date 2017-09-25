import React from 'react';
import Page from '../../layout/page/page.component.js';
import Hexagon from './hexagon.component.js';
import { preloader } from './spinner.component.scss';

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
