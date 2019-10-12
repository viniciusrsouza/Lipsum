import React from 'react'
import Element from './Element.js'
import './TeamElement.css'
import image from '../../images/icon_user.png'

class TeamElement extends Element{
    getChildren(){
        return(
            <div>
                <h1>Equipe</h1>
                <div className="team-cards row">
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
        <div className="col-lg-4">
            <img src={image} width='384px'/>
            <h2>Heading</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
    )
}

export default TeamElement