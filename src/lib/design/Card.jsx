import React, { Component } from 'react';
import * as s from './card.scss';

/**
 * @prop title      : string
 * @prop noFoot     : boolean
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
        const { fade, title, noFoot, customFoot, children, expandable } = this.props;
        const _noFoot = noFoot || (!expandable && !customFoot);
        const classNames = clicked ? {
            background: s.background,
            cContainer: `${s.cContainer} ${s.clicked}`,
            cCard: `${s.cCard} ${s.clicked}`,
            cContent: `${s.cContent} ${s.clicked}`,
            cFootContent: s.cFootContent,
            cCustomFoot: s.clicked,
            cFootClose: s.cFootClose
        } : {
            background: `${s.background} ${s.unClicked}`,
            cContainer: s.cContainer,
            cCard: s.cCard,
            cContent: `${s.cContent} ${s.nClicked} ${_noFoot ? s.noFoot : ''} ${fade ? s.fade : ''}`,
            cFootContent: `${s.cFootContent} ${s.nClicked} ${_noFoot ? s.noFoot : ''}`,
            cCustomFoot: s.nClicked,
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
                    <div className={`${s.cFoot} ${_noFoot ? s.noFoot : ''}`}>
                        <div className={classNames.cFootContent}>
                            {(!_noFoot && customFoot) && children(clicked, customFoot)}
                            {(!_noFoot && !customFoot && expandable) && <span className={classNames.cCustomFoot}>{'Click For More'}</span>}
                            <div className={classNames.cFootClose} onClick={() => this.toggleState(false)}>X</div>
                        </div>
                    </div>

                </div>
            </div>
        ];
    }
}

export default Card;
