import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import logo from "../images/logo2.png";

export var callModal;

export class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      user: {
        nome: "Mateus Lins e Silva Duque de Barros",
        email: "mateuslins02@gmail.com",
        afiliação: "AIbox Lab",
        departamento: "Iniciação Científica",
        formação:
          "Bacharelado em Ciência da Computação pela Universidade Federal Rural de Pernambuco",
        linkLattes: "http://google.com",
        produções: [
          "Aplicabilidade e Impactos quanto a Adoção de Modelos de Classificação como Mecanismos Anti-Phishing",
          "Adoption of Feature Selection as Anti-Phishing Mechanism: Applicability and Impacts"
        ]
      }
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.handleShow()
    
    callModal = (user) => { 
      this.handleShow(user)
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(user) {
    this.setState({ show: true, user: user });
  }

  render() {
    return (
      <>
        {/*<Button variant="primary" onClick={this.handleShow}>
          Info User
    </Button>*/}

        <Modal show={this.state.show} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Informações do usuário</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="text-center">
              <div class="formContent">
                <div class="form-group">
                  <img src={logo} width="222" />
                </div>
              </div>
            </div>
            <h5>Nome</h5>
            <p>{this.state.user.nome}</p>
            <h5>E-mail</h5>
            <p>{this.state.user.email}</p>
            <h5>Afiliação / Departamento</h5>
            <p>
              {this.state.user.afiliação}, {this.state.user.departamento}
            </p>
            <h5>Formação</h5>
            <p>{this.state.user.formação}</p>
            <h5>Link do Lattes</h5>
            <p>
              <a href={this.state.user.linkLattes}>
                {this.state.user.linkLattes}
              </a>
            </p>
            <hr />
            <h5>Produções</h5>
            <ul>
              {this.state.user.produções.map(produçao => (
                <li>{produçao}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
