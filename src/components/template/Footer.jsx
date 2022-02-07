import React from "react";
import '../../styles/Footer.css'
import icon from '../../assets/imgs/pokemon.png'
const footerComponent = props => 
    <footer className="footer">
        <h3>Developed by Vitor Hugo</h3> <img src={icon} alt="" />
    </footer>

export default footerComponent