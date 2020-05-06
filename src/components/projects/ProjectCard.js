import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="ui card">
            <div className="image">
                <img
                    alt="language cover"
                    src={`${window.location.origin}/images/projects/${project.image}`}
                />
            </div>

            <div className="content">
                <p className="header">{project.title}</p>
                <div className="description">{project.description}</div>
            </div>

            <div className="extra content">
                <h3 className="header">Goals</h3>
                <ul className="ui middle divided list">
                    {project.goals.map((goal) => (
                        <li key={goal} className="item">{goal}</li>
                    ))}
                </ul>
            </div>
            
            <div className="extra content">
                Coding Level: <strong>{project.level}</strong>
            </div>
        </div>
    );
};

export default ProjectCard;
