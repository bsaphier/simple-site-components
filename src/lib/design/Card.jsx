import React, { Component } from 'react';
import * as s from './card.scss';

/**
 * @prop expandable : boolean
 * @prop customFoot : boolean
 * @prop children   : (clicked, isFoot) => child
 */
class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.toggleState = this.toggleState.bind(this);
    }

    toggleState(clicked) {
        if (this.props.expandable) {
            this.setState(() => ({
                clicked
            }));
        }
    }

    render() {
        const { clicked } = this.state;
        const { title, customFoot, children, expandable } = this.props;
        const classNames = clicked ? {
            background: s.background,
            cContainer: `${s.cContainer} ${s.clicked}`,
            cCard: `${s.cCard} ${s.clicked}`,
            cContent: `${s.cContent} ${s.clicked}`,
            cFootContent: s.cFootContent,
            cFootClose: s.cFootClose
        } : {
            background: `${s.background} ${s.unClicked}`,
            cContainer: s.cContainer,
            cCard: s.cCard,
            cContent: s.cContent,
            cFootContent: `${s.cFootContent} ${s.nClicked}`,
            cFootClose: `${s.cFootClose} ${s.clicked}`
        };
        return [
            // background - behind card, infront of everything else
            <div key={`${title}BG`} className={classNames.background} />,

            // this card
            <div key={`${title}CARD`} className={classNames.cContainer}>
                <div className={classNames.cCard} onClick={(!clicked) ? () => this.toggleState(true) : null}>
                    <div className={s.cMain}>
                        <div className={s.cTitle}>
                            {title}
                        </div>
                        <div className={classNames.cContent}>
                            {children(clicked)}
                        </div>
                    </div>
                    <div className={s.cFoot}>
                        <div className={classNames.cFootContent}>
                            {customFoot && children(clicked, customFoot)}
                            {(!customFoot && expandable) && <span className={s[!clicked ? 'nClicked' : 'clicked']}>{'Click For More'}</span>}
                            <div className={classNames.cFootClose} onClick={() => this.toggleState(false)}>X</div>
                        </div>
                    </div>

                </div>
            </div>
        ];
    }
}

export default Card;
