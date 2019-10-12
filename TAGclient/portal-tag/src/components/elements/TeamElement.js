import React from 'react'
import Element from './Element.js'
import './TeamElement.css'
import image from '../../images/icon_user.png'

class TeamElement extends Element{
    getChildren(){
        return(
            <div>
                <h1>Equipe</h1>
                <div className="team-cards">
                    <TeamCard/>
                    <TeamCard/>
                    <TeamCard/>
                </div>
            </div>
        )
    }
}

function TeamCard(){
    return(
        <div class="team-card">
            <img src={image} width='384' height='256'/>
            <h3>Lucas Albertins de Lima</h3>
            <p>Duis fermentum facilisis velit, a consectetur quam sollicitudin vel. Vivamus vulputate justo metus, a varius est egestas id. Donec posuere eu ex eu tincidunt. Nam quis pharetra elit. Pellentesque hendrerit purus ac neque bibendum scelerisque. Nulla facilisi.</p>
        </div>
    )
}

export default TeamElement