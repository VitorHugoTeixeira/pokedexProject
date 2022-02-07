import React, { Component } from "react";
import axios from 'axios'
import '../styles/PokemonData.css'
import Search from '../components/form/Search'

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

const initialState = {
    name: '',
    pokemon: {
        id: 0,
        height: 0,
        weight: 0,
        name: '',
        sprites: { front_default: null }
    }
}

export default class PokemonData extends Component {

    state = initialState

    constructor(props) {
        super(props)

        this.updateStateName = this.updateStateName.bind(this)
        this.search = this.search.bind(this)
    }

    async search() {
        try {
            const currentState = this.state
            const name = this.state.name.toLowerCase()
            const resp = await axios.get(baseURL + name)

            currentState.pokemon.name = resp.data.name
            currentState.pokemon.height = resp.data.height
            currentState.pokemon.weight = resp.data.weight
            currentState.pokemon.id = resp.data.id
            currentState.pokemon.sprites.front_default = resp.data.sprites.front_default

            this.setState(currentState)
        } catch (error) {
            alert('Insert the correct name of pokemon!')
            this.setState({ name: ''})
        }
    }

    updateStateName(event) {
        let name = this.state.name

        name = event.target.value
        this.setState({ name })
    }

    render() {
        return (
            <React.Fragment>
                <Search valueInput={this.state.name} callbackSearch={this.search} callbackUpdate={this.updateStateName} />
                <div className="pokemonData">
                    <h1>{this.state.pokemon.name}</h1>
                    <img src={this.state.pokemon.sprites.front_default} alt="" />
                    <div className="stats">
                        <p>Id: {this.state.pokemon.id}</p>
                        <p>Height: {this.state.pokemon.height}</p>
                        <p>Weight: {this.state.pokemon.weight}</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}