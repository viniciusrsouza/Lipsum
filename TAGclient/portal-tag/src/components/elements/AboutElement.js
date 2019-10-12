import React from 'react'
import Element from './Element.js'
import image from '../../images/using-notebook.png'
import './AboutElement.css'

class AboutElement extends Element{
    getChildren(){
        return(
            <div className='about-container'>
                <div className='about-information'>
                    <h1>Test Automation Group</h1>
                    <p>Breve descrição da empresa definida pelo cliente. ex: We're a group of passionate software testers in... with an enthusiastic drive for technology...</p>
                </div>
                <div className='about-media'>
                    <img src={image} width='384' height='216'/>
                    <img src={image} width='384' height='216'/>
                </div>
            </div>
        )
    }
}

export default AboutElement