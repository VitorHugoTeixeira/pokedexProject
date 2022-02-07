import React from "react";
import '../../styles/Main.css'

import Search from '../form/Search'
import Content from './Content'


const mainComponent = props =>
    <main className="main">
        <h1>Welcome to Pokedéx with React</h1>
        <p>Type a pokemon name or id to start</p>
        <Search />
        <Content />
    </main>
export default mainComponent