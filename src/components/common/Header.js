import React from "react";
import {Link} from 'react-router-dom';

const Header = () => (
    <header className="ui stackable menu">
        <Link to="/" className="header item">Jayant Malik</Link>
        <Link to="/" className="item">Programming Languages</Link>
        <Link to="/about" className="item">About Me</Link>
    </header>
);

export default Header;
