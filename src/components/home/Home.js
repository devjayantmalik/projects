import React from "react";

import Language from "./Language";

import { connect } from "react-redux";
import { fetchLanguages } from "../../actions";

class Home extends React.Component {
    
    componentDidMount() {
        if(!this.props.languages.length){
            this.props.fetchLanguages();
        }
    }

    renderLanguages = () => {
        return this.props.languages.map((lang) => <Language key={lang.id} language={lang} />);
    };

    renderLoader = () => (
        <div className="ui segment">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div>
    );

    render() {
        if (!this.props.languages.length) {
            return this.renderLoader();
        }

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

const mapStateToProps = (state) => {
    return { languages: state.languages };
};

export default connect(mapStateToProps, { fetchLanguages })(Home);
