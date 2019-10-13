import React from 'react'
import './LoginCard.css'
import image from '../images/icon_user.png'

class LoginCard extends React.Component{
    render(){
        return(
            <div class="wrapper">
                <div id="formContent">
                    <div class="first">
                    <img src={image} id="icon" alt="User Icon" />
                    </div>
                    <form>
                    <input type="email" id="email" class="login-form second" name="email" placeholder="email"/>
                    <input type="password" id="password" class="login-form third" name="password" placeholder="password"/>
                    <input type="button" class="login-button fourth" value="Log In" onClick={this.props.onClick}/>
                    </form>
                    <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginCard