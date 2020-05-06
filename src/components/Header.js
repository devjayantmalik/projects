import React from "react";
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="ui stackable menu">
        <Link to="/" className="header item">Jayant Malik</Link>
        <Link to="/about" className="item">About Me</Link>
        <Link to="/projects" className="item">Projects</Link>
        <Link to="/contact" className="item">Contact</Link>
    </header>
);

export default Header;
