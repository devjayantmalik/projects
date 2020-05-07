import React from "react";

import Language from "./Language";
import Loader from "../common/Loader";

import { connect } from "react-redux";
import { fetchLanguages } from "../../actions";

import "./Home.css";

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchLanguages();
    }

    renderLanguages = () => {
        return this.props.languages.map((lang) => (
            <Language key={lang.id} language={lang} />
        ));
    };

    render() {
        if (!this.props.languages.length) {
            return <Loader title="Please wait, we are fetching languages..." />;
        }

        return (
            <main className="homepage">
                <div className="ui basic segment">
                    <section className="pusher">
                        <h2 className="heading">Programming Languages</h2>
                        <div className="ui link cards">
                            {this.renderLanguages()}
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return { languages: state.languages };
};

export default connect(mapStateToProps, { fetchLanguages })(Home);
