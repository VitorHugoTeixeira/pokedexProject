import React from "react";
import '../../styles/Main.css'
import PokemonData from '../../data/PokemonData'

const mainComponent = props =>
    <main className="main">
        <h1>Welcome to Pokedéx with React</h1>
        <p>Type a pokemon name or id to start</p>
        <PokemonData />
    </main>
export default mainComponent