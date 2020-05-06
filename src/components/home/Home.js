import React from "react";

import Language from "./Language";

class Home extends React.Component {
    renderLanguages = () => {
        return [1, 2, 3, 4, 5, 6].map((lang) => <Language />);
    };

    render() {
        return (
            <main className="ui basic container">
                <section className="pusher">
                    <h2>Languages</h2>
                    <div className="ui link cards">
                        {this.renderLanguages()}
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
