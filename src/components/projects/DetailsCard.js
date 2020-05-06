import React from "react";

const DetailsCard = ({ project }) => {
    return (
        <div className="ui raised very padded text container segment">
            <div className="ui image">
                <img src={`${window.location.origin}/images/languages/javascript.jpg`} alt="" />
            </div>
            <h2 className="ui header">Dogs Roles with Humans</h2>
            <p>A slave named Androcles once escaped from his master and fled to the forest. As he was wandering about there he came upon a Lion lying down moaning and groaning. At first he turned to flee, but finding that the Lion did not pursue him, he turned back and went up to him.</p>
            <p>A Lion lay asleep in the forest, his great head resting on his paws. A timid little Mouse came upon him unexpectedly, and in her fright and haste to get away, ran across the Lion's nose. Roused from his nap, the Lion laid his huge paw angrily on the tiny creature to kill her.</p>
        </div>
    );
};

export default DetailsCard;
