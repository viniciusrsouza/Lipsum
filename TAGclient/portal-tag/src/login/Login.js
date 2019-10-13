import React from 'react'
import './Login.css'
import LoginCard from './LoginCard'
import sha1 from 'crypto-js/sha1'

class Login extends React.Component{
    render(){
        return(
            <div>
                <LoginCard onClick={this.onLogin}/>
            </div>
        )
    }

    onLogin(){
        const emailElement = document.getElementById('email')
        const passwordElement = document.getElementById('password')
        const email = emailElement.value
        const password = sha1(passwordElement.value)
        window.alert(`email= ${email}\npassword= ${password}`)
    }
}

export default Login