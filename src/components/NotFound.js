import React from "react";

const NotFound = () => {
    return (
        <div className="ui basic segment">
            <img
                alt="logo"
                className="ui medium centered circular image"
                src={`${window.location.origin}/images/logo.svg`}
            />
            <div className="ui red message">
                <h2 className="header">
                    The page you requested is not available.
                </h2>
            </div>
            <div className="ui red message">
                <h2 className="header">
                    If you think this is an error, please report me.
                </h2>
            </div>

            <div className="ui card">
                <div className="content">
                    <address>
                        <p>
                            <span>Email: </span>
                            <a href="mailto:dev.jayantmalik@gmail.com">
                                <strong>dev.jayantmalik@gmail.com</strong>
                            </a>
                        </p>
                        <p>
                            <span>Github: </span>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/devjayantmalik">
                                <strong>github.com/devjayantmalik</strong>
                            </a>
                        </p>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
