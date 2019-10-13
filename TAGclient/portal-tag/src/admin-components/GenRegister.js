import React from 'react'
import './GenRegister.css'
import image from '../images/icon_user.png'
import AdminComponent from './AdminComponent'

class GenRegister extends AdminComponent{
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
            <div className="wrapper">
                <div id="formContent">
                    <div className="first">
                    <img src={image} id="icon" alt="User Icon" />
                    </div>
                    <form>
                    <input type="text" id="name" className="login-form second" name="email" placeholder="email"/>
                    <input type="button" className="login-button fourth" value="Send register link" onClick={this.props.onClick}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default GenRegister