import React from "react";

const Language = (props) => {
    return (
        <div className="ui card">
            <div className="image">
                <img
                    alt="language cover"
                    src={`${window.location.origin}/images/languages/cpp.jpg`}
                />
            </div>
            <div className="content">
                <a href="#" className="header">C++</a>
                <div className="description">
                    Get the most out of Operating System.
                </div>
            </div>
        </div>
    );
};

export default Language;
