import React from "react";

const Language = ({language}) => {
    return (
        <div className="ui card">
            <div className="image">
                <img
                    alt="language cover"
                    src={`${window.location.origin}/images/languages/${language.image}`}
                />
            </div>
            <div className="content">
                <a href="#" className="header">{language.name}</a>
                <div className="description">{language.description}</div>
            </div>
        </div>
    );
};

export default Language;
