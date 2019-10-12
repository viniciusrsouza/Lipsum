import React, {Component} from 'react'

/**
 * por padrão renderiza todos os elementos
 * filhos definidos na tag <Element> filhos </Element>
 * pode ser extendido e sobrescrito o método
 * getChildren. ex em AboutElements.js
 */
class Element extends Component{
    render(){
        return(
            <div id={this.props.id}>
                {this.getChildren()}
            </div>
        )
    }
    getChildren(){
        return this.props.children
    }
}

export default Element