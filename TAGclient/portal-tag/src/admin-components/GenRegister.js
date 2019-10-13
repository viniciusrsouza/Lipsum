import React from 'react'
import './GenRegister.css'
import image from '../images/icon_user.png'

class GenRegister extends React.Component{
    onClickGenRegister(){
        
    }
    render(){
        return(
            <div>
                <GenRegisterCard onClick={this.onClickGenRegister}/>
            </div>
        )
    }
}

class GenRegisterCard extends React.Component{
    render(){
        return(
            <div class="wrapper">
                <div id="formContent">
                    <div class="first">
                    <img src={image} id="icon" alt="User Icon" />
                    </div>
                    <form>
                    <input type="text" id="name" class="login-form second" name="email" placeholder="email"/>
                    <input type="button" class="login-button fourth" value="Send register link" onClick={this.props.onClick}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default GenRegister