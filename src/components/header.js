import React from 'react';
import {connect} from 'react-redux';//connect header

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export function Header (props)  { //change
    /*constructor(props) {
        super(props);
        this.state = {
            showInfoModal: false
        };
    }

    toggleInfoModal() {
        this.setState({
            showInfoModal: !this.state.showInfoModal
        });
    }

    render() {*/
        let infoModal;
        if (props.showInfoModal) {//remove state, add props
            infoModal = <InfoModal />;
        }

        return (
            <header>
                <TopNav />//change
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
   // }
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(Header);
