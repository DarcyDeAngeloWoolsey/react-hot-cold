import React from 'react';
import {connect} from 'react-redux';

import {onNewGame, toggleInfoModal} from '../actions';

import './top-nav.css';

export class TopNav extends React.Component {
    onNewGame(event) {
        event.preventDefault();
        /*if (this.props.onNewGame) {
            this.props.onNewGame();
        }*/
        this.props.dispatch(onNewGame());
    }

    /*onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }*/
    
    toggleInfoModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
            <a className="what" href="#" onClick={e => this.toggleInfoModal(e)}>
                            What?
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.onNewGame(e)}>
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);