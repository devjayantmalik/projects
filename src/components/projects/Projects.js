import React from "react";

import { connect } from "react-redux";
import { fetchProjectsByLanguage } from "../../actions";
import ProjectCard from "./ProjectCard";

class Projects extends React.Component {
    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        if (!isNaN(id)) this.props.fetchProjectsByLanguage(id);
    }

    renderError = () => {
        return (
            <div className="ui red message">
                <p>No projects found for provided language.</p>
            </div>
        );
    };

    renderProjects = () => (
        <div className="ui basic segment">
            <div className="ui link cards">
                {this.props.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );

    render() {
        if (this.props.projectsCount <= 0) return this.renderError();

        return this.renderProjects();
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = parseInt(ownProps.match.params.id);
    const projects = state.projects.filter(
        (project) => project.language === id
    );
    return { projects: projects, projectsCount: projects.length };
};

export default connect(mapStateToProps, { fetchProjectsByLanguage })(Projects);
