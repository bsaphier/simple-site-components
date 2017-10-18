import React, { Component } from 'react';
import * as s from './card.scss';


class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(clicked) {
        this.setState(() => ({
            clicked
        }));
    }

    render() {
        const { clicked } = this.state;
        const { title, customFoot, children } = this.props;
        return [
            <div key={`${title}BG`} className={clicked ? s.background : `${s.background} ${s.unClicked}`} />,
            <div key={`${title}CARD`} className={clicked ? `${s.cContainer} ${s.clicked}` : s.cContainer}>
                <div className={clicked ? `${s.cCard} ${s.clicked}` : s.cCard} onClick={(!clicked) ? () => this.toggleState(true) : null}>
                    <div className={s.cMain}>
                        <div className={s.cTitle}>
                            {title}
                        </div>
                        <div className={s.cContent}>
                            {children(clicked)}
                        </div>
                    </div>
                    <div className={s.cFoot}>
                        <div className={!clicked ? `${s.cFootContent} ${s.nClicked}` : s.cFootContent}>
                            {customFoot && children(clicked, customFoot)}
                            {!customFoot && <span className={s[!clicked ? 'nClicked' : 'clicked']}>{'Click For More'}</span>}
                            <div className={clicked ? s.cFootClose : `${s.cFootClose} ${s.clicked}`} onClick={() => this.toggleState(false)}>Close</div>
                        </div>
                    </div>
                </div>
            </div>
        ];
    }
}

export default Card;
