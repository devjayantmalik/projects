import React from "react";
import { Link } from "react-router-dom";

const Language = ({ language }) => {
    return (
        <Link className="ui card" to={`/language/${language.id}`}>
            <div className="image">
                <img
                    alt="language cover"
                    src={`${process.env.PUBLIC_URL}/images/languages/${language.image}`}
                />
            </div>
            <div className="content">
                <p href="#" className="header">
                    {language.name}
                </p>
                <div className="description">{language.description}</div>
            </div>
        </Link>
    );
};

export default Language;
