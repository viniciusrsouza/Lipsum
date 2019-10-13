import React from 'react'
import './Register.css'
import image from '../images/icon_user.png'

class Register extends React.Component{
    render(){
        return(
            <div>
                <RegisterCard/>
            </div>
        )
    }
}

class RegisterCard extends React.Component{
    render(){
        return(
            <div class="wrapper">
                <div id="formContent">
                    <div class="first">
                    <img src={image} id="icon" alt="User Icon" />
                    </div>
                    <form>
                    <input type="email" id="email" class="login-form second" name="email" placeholder="email"/>
                    <input type="button" class="login-button fourth" value="Send register link" onClick={this.props.onClick}/>
                    </form>
                </div>
            </div>
        )
    }
}