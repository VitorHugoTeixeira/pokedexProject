import React from "react";
import pokeball from '../../assets/imgs/pokeball.png'
import '../../styles/Search.css'

const searchComponent = props => 
    <div className="form-template">
        <input type="text" name="name" value={props.valueInput} className="texSearch" onChange={props.callbackUpdate} placeholder="Search pokemon..."/>
        <button className="btn-search" onClick={props.callbackSearch}>Search <img src={pokeball} alt="" /></button>
    </div>

export default searchComponent