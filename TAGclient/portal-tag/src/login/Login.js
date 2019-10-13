import React from 'react'
import './Login.css'
import LoginCard from './LoginCard'
import sha1 from 'crypto-js/sha1'
import {authenticate} from '../utils'

class Login extends React.Component {
  render() {
    return (
      <div>
        <LoginCard onClick={this.onLogin} />
      </div>
    );
  }

    onLogin(){
        const emailElement = document.getElementById('email')
        const passwordElement = document.getElementById('password')
        const email = emailElement.value
        const password = sha1(passwordElement.value).toString()
        authenticate(sha1(email + password), ()=>{})
        window.location.href='/'
    }
}

export default Login;
