import React, { Component } from 'react';
import Router from './router';
import GlobalContext from './GlobalContext';
import en from './languages/en.json';
import ua from './languages/ua.json';
import { BrowserRouter } from "react-router-dom";
import cookie from 'react-cookies'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            l: 'en',
        }
        console.log(cookie)
    }
    componentDidMount() {
        let l = cookie.load('l')
        console.log('coolie', l)
        if (l.l) {
            this.setState({ l: l.l })
        }
    }
    translate = (v) => {
        if (this.state.l === 'en') {
            return en[v]
        }
        if (this.state.l === 'ua') {
            return ua[v]
        }
    }
    changeL = (l) => {
        this.setState({ l })
        cookie.save("l", { l }, { path: '/' })
        this.forceUpdate()
    }

    render() {

        return (
            <GlobalContext.Provider
                value={{
                    user: this.state.user,
                    l: this.state.l,
                    changeL: this.changeL,
                    translate: this.translate

                }}
            >
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </GlobalContext.Provider>
        )
    }
}