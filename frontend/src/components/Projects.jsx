import React from 'react';
import Hello from '../App'

const ProjectItem = (props) => {
    function more(){
        return(
            <h1>{props.project.id}</h1>
        )
    }
    return (
        <div className="App-project">
            <div className="App-project-image"></div>
            <h3>{ props.project.title }</h3>
            <div>{ props.project.description }</div>
            <button className="button-more" onClick={more}>Подробнее</button>
        </div>
    );
};

export default ProjectItem;