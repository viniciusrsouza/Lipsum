import React from 'react'
import Element from './Element.js'
import './ProjectsElement.css'
import image from '../../images/using-notebook.png'

class ProjectElement extends Element{
    getChildren(){
        return(
            <div>
                <h1>Projetos</h1>
                <div className="project-cards">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
                <button> Ver mais... </button>
            </div>
        )
    }
}

function ProjectCard(){
    return(
        <div class="project-card">
            <img src={image} width='384' height='216'/>
            <h3>Lorem ipsum dolor sit amet, consectur</h3>
            <p>Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi. Aenean sit amet tellus nec mauris bibendum rutrum eu sollicitudin enim. Mauris dignissim scelerisque mauris, auctor imperdiet leo elementum non.</p>
        </div>
    )
}

export default ProjectElement