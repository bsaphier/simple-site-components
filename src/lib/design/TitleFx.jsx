import React from 'react';
import * as s from './title-fx.scss';

export default ({leave, hover, cbArgs, children, ...props}) => {
    return (
        <div
            className={s.titleWrapper}
            onMouseOver={hover ? () => hover(cbArgs) : null}
            onMouseLeave={leave ? () => leave(cbArgs) : null}>
            <span {...props} className={`${s.titleText} ${props.className}`}>
                { children }
            </span>
        </div>
    );
};

/**
 * –––– New use-case ––––
 *  ...
 *    hover({id, sound}) {
 *        this.setState({ motion: { ...motion.enter, [id]: motion.exit[id] }});
 *        this.props.playSound( sound );
 *    }
 *    leave({id}) {
 *        this.setState({ motion: {...motion.enter, [id]: motion.enter[id] }});
 *    }
 *    render() {
 *        ...
 *        <TitleFx
 *            hover={this.hover}
 *            leave={this.leave}
 *            cbArgs={{
 *                sound: this.state.musicScale[0],
 *                id: 'title0'
 *            }}
 *            style={{
 *                fontWeight: 500,
 *                fontSize: 'calc(3.8 * 4.275vmin)',
 *                lineHeight: '0.7em',
 *                paddingTop: '0.06em',
 *                paddingRight: '0.1em',
 *                paddingLeft: '0.05em',
 *                letterSpacing: `${interpStyle.title0}em`
 *            }}>
 *            Hello
 *        </TitleFx>
 * –––– Old use-case ––––
 *  ...
 *    hover(id, sound) {
 *        this.setState({ motion: { ...motion.enter, [id]: motion.exit[id] }});
 *        this.props.playSound( sound );
 *    }
 *    leave(id) {
 *        this.setState({ motion: {...motion.enter, [id]: motion.enter[id] }});
 *    }
 *    render() {
 *        ...
 *        <TitleText
 *            hover={this.hover}
 *            leave={this.leave}
 *            sound={this.state.musicScale[0]}
 *            id="title0"
 *            style={{
 *                fontWeight: 500,
 *                fontSize: 'calc(3.8 * 4.275vmin)',
 *                lineHeight: '0.7em',
 *                paddingTop: '0.06em',
 *                paddingRight: '0.1em',
 *                paddingLeft: '0.05em',
 *                letterSpacing: `${interpStyle.title0}em`
 *            }}>
 *            Hello
 *        </TitleText>
 */
