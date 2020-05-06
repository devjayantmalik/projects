import React from 'react';

const Loader = ({title}) => {
    return (
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader">{title}</div>
            </div>
        </div>
    )
}

export default Loader;