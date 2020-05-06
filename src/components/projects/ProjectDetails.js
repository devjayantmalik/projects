import React from 'react';
import {connect} from 'react-redux';
import {fetchProjectById} from '../../actions';
import DetailsCard from './DetailsCard';

class ProjectDetails extends React.Component{

    componentDidMount(){
        let {id} = this.props.match.params;
        id = parseInt(id);

        if(!isNaN(id)) this.props.fetchProjectById(id);
    }

    renderError(){
        return(
            <div className="ui red message">
                <p>Project with the provided id does not exist.</p>
            </div>
        )
    }

    render(){
        console.log(this.props);
        if(this.props.project === undefined) return this.renderError();

        return <DetailsCard />
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const project = state.projects.filter(project => project.id === parseInt(id))[0];
    return {project}
    
}

export default connect(mapStateToProps, {fetchProjectById})(ProjectDetails);