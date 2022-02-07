import React from "react";
import './styles/App.css'


import Main from './components/template/Main'
import Header from './components/template/Header'
import Footer from './components/template/Footer'

const appComponent = props =>
    <div className="app">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </div>

export default appComponent