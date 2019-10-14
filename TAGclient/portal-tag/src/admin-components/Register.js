import React from "react";
import "./Register.css";
import RestrictComponent from "./RestrictComponent";
import validator from "validator";
import PasswordValidator from "password-validator";
import logo from "../images/logo2.png";

class Register extends RestrictComponent {
  constructor(props) {
    super(props);
  }
  onClickRegister() {
    const user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      afilliation: document.getElementById("affiliation").value,
      department: document.getElementById("dept").value,
      grade: document.getElementById("grade").value,
      lattes: document.getElementById("lattes").value
    };
    if (hasEmptyFields(user)) {
      window.alert("Preencha os campos vazios");
    } else if (!validPassword(user)) {
      window.alert("Senha não é válida");
    } else if (!validator.isEmail(user.email)) {
      window.alert("Email não é válido");
    } else if (!validator.isURL(user.lattes)) {
      window.alert("Link do lattes não é um URL válido");
    }
    window.alert(JSON.stringify(user));
  }

  render() {
    return (
      <div>
        <RegisterCard onClick={this.onClickRegister} />
      </div>
    );
  }
}

function hasEmptyFields(user) {
  for (let key in user) {
    if (!user[key]) return true;
  }
  return document.getElementById("confirm-password").value === "";
}

function validPassword(user) {
  if (user.password === document.getElementById("confirm-password").value) {
    var schema = new PasswordValidator();
    schema
      .is()
      .min(8)
      .is()
      .max(100)
      .has()
      .uppercase()
      .has()
      .lowercase()
      .has()
      .digits()
      .has()
      .not()
      .spaces()
      .is()
      .not()
      .oneOf([user.name, user.email]);
    return schema.validate(user.password);
  }
  return false;
}

class RegisterCard extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <form class="formContent2">
          <img
            class="mb-4 img-fluid"
            src={logo}
            alt=""
            width="148"
            height="148"
          ></img>
          <div class="form-group">
            <label for="inputName">Nome</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Nome"
              required
            ></input>
          </div>
          <div class="form-group">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              required
            ></input>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputPassword">Senha</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Senha"
                required
              ></input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword">Confirmar Senha</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                placeholder="Senha"
                required
              ></input>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputText">Afiliação</label>
              <input
                type="text"
                class="form-control"
                id="affiliation"
                placeholder="Afiliação"
                required
              ></input>
            </div>
            <div class="form-group col-md-6">
              <label for="inputText">Departamento</label>
              <input
                type="text"
                class="form-control"
                id="dept"
                placeholder="Departamento"
                required
              ></input>
            </div>
          </div>
          <div class="form-group">
            <label for="inputText">Formação</label>
            <input
              type="text"
              class="form-control"
              id="grade"
              placeholder="Formação"
              required
            ></input>
          </div>
          <div class="form-group">
            <label for="inputText">Link do Lattes</label>
            <input
              type="text"
              class="form-control"
              id="lattes"
              placeholder="Link do Lattes"
              required
            ></input>
          </div>
          <button
            class="btn btn-primary"
            type="button"
            value="Registrar"
            onClick={this.props.onClick}
          >
            Cadastrar-se
          </button>
        </form>
      </div>
    );
  }
}

{
  /* <input
              type="text"
              id="name"
              class="login-form second"
              name="nome"
              placeholder="nome"
            />
            <input
              type="email"
              id="email"
              class="login-form second"
              name="email"
              placeholder="email"
            />
            <input
              type="password"
              id="password"
              class="login-form second"
              name="senha"
              placeholder="senha"
            />
            <input
              type="password"
              id="confirm-password"
              class="login-form second"
              name="confirma-senha"
              placeholder="confirmar senha"
            />
            <input
              type="text"
              id="affiliation"
              class="login-form second"
              name="afiliacao"
              placeholder="Afiliação"
            />
            <input
              type="text"
              id="dept"
              class="login-form second"
              name="dept"
              placeholder="Departamento"
            />
            <input
              type="text"
              id="grade"
              class="login-form second"
              name="grade"
              placeholder="Formação"
            />
            <input
              type="text"
              id="lattes"
              class="login-form second"
              name="lattes"
              placeholder="Lattes"
            />
            <input
              type="button"
              class="login-button fourth"
              value="Registrar"
              onClick={this.props.onClick}
            /> */
}

export default Register;
