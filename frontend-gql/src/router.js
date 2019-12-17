import React, { Component } from "react";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { bg } from './styles/images';


import Box from './styles/Box';
import Main from './pages/main'

import Header from "./components/Header";
import Footer from "./components/Footer";

import Modal from 'react-modal'

import Login from './components/Login';


import PackagesList from './pages/packagesList';
import PackageFull from './pages/packageFull';
import NotFound from './components/NotFound';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    changeState = (data) => {
        console.log("data= >", data)
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    render() {
        return (
            <Box display="flex" flexDirection="column" justifyContent="space-between" >
                <Modal
                    isOpen={this.state.modalIsOpen}
                    // onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Login />
                </Modal>
                <Header openModal={this.openModal} />
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/packages" component={PackagesList} exact />
                    <Route path="/package/:id" component={PackageFull} exact />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </Box >
        );
    }
}