import React from "react";

const ProjectCard = ({ project }) => {
    const { details } = project;

    return (
        <a href={project.url} rel="noopener noreferrer" target="_blank" className="ui card">
            <div className="image">
                <img
                    alt="language cover"
                    src={`${process.env.PUBLIC_URL}/images/projects/${details.image}`}
                />
            </div>

            <div className="content">
                <p className="header">{details.title}</p>
                <div className="description">{details.description}</div>
            </div>

            <div className="extra content">
                <h3 className="header">Goals</h3>
                <ul className="ui divided list">
                    {details.goals.map((goal) => (
                        <li key={goal} className="item">
                            {goal}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="extra content">
                Coding Level: <strong>{details.level}</strong>
            </div>
        </a>
    );
};

export default ProjectCard;
