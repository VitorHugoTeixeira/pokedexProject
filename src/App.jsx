import React, { Fragment } from "react";
import './styles/App.css'


import Main from './components/template/Main'
import Header from './components/template/Header'
import Footer from './components/template/Footer'

const appComponent = props =>
    <Fragment>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </Fragment>

export default appComponent