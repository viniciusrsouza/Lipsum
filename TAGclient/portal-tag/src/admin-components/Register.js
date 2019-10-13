import React from 'react'
import image from '../images/icon_user.png'
import RestrictComponent from './RestrictComponent'
import validator from 'validator'
import PasswordValidator from 'password-validator'

class Register extends RestrictComponent{
    constructor(props){
        super(props)
    }
    onClickRegister(){
        const user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            afilliation: document.getElementById('affiliation').value,
            department: document.getElementById('dept').value,
            grade: document.getElementById('grade').value,
            lattes: document.getElementById('lattes').value
        }
        if(!validPassword(user)){
            window.alert('Senha não é válida')
        }else if(!validator.isEmail(user.email)){
            window.alert('Email não é válido')
        }
        window.alert(JSON.stringify(user))
    }

    render(){
        return(
            <div>
                <RegisterCard onClick={this.onClickRegister}/>
            </div>
        )
    }
}

function validPassword(user){
    if(user.password === document.getElementById('confirm-password').value){
        var schema = new PasswordValidator()
        schema
        .is().min(8)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits()
        .has().not().spaces()
        .is().not().oneOf([user.name, user.email])
        return schema.validate(user.password)
    }
    return false
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
                    <input type="text" id="name" class="login-form second" name="nome" placeholder="nome"/>
                    <input type="email" id="email" class="login-form second" name="email" placeholder="email"/>
                    <input type="password" id="password" class="login-form second" name="senha" placeholder="senha"/>
                    <input type="password" id="confirm-password" class="login-form second" name="confirma-senha" placeholder="confirmar senha"/>
                    <input type="text" id="affiliation" class="login-form second" name="afiliacao" placeholder="Afiliação"/>
                    <input type="text" id="dept" class="login-form second" name="dept" placeholder="Departamento"/>
                    <input type="text" id="grade" class="login-form second" name="grade" placeholder="Formação"/>
                    <input type="text" id="lattes" class="login-form second" name="lattes" placeholder="Lattes"/>
                    <input type="button" class="login-button fourth" value="Registrar" onClick={this.props.onClick}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register