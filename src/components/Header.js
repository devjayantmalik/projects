import React from "react";
import {Link} from 'react-router-dom';

const Header = () => (
    <div className="ui menu">
        <div className="header item">
        <Link to="/">Jayant Malik</Link>
        </div>
        <Link to="/about" className="item">About Me</Link>
        <Link to="/projects" className="item">Projects</Link>
        <Link to="/contact" className="item">Contact</Link>
    </div>
);

export default Header;
