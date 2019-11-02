import React, { Component } from "react";
import "./submitProject.css";
import logo from "../images/logo2.png";
import { post, endpoints } from "../network/http-methods";

class submitProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: null,
      link_projeto: null,
      categoria: null,
      descricao: null,
      imagem: null,
      participants: []
    };

    this.imgChange = this.imgChange.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.publish = this.publish.bind(this);
    this.updateFields = this.updateFields.bind(this);
  }

  imgChange(event) {
    this.setState({
      imagem: event.target.files[0]
    });
  }

  addParticipant() {
    this.setState({ participants: [...this.state.participants, ""] });
  }

  handleChange(e, index) {
    this.state.participants[index] = e.target.value;
    this.setState({ participants: this.state.participants });
  }

  handleRemove(index) {
    this.state.participants.splice(index, 1);
    this.setState({ participants: this.state.participants });
  }

  async updateFields(){
    this.setState({
      titulo: document.getElementById("title").value,
      link_projeto: document.getElementById("article-link").value,
      categoria: document.getElementById("exampleFormControlSelect1").value,
      descricao: document.getElementById("exampleFormControlTextarea1").value
    })
  }

  async publish(){
    await this.updateFields()
    console.log(this.state)
    let data = new FormData()
    data.append('titulo', this.state.titulo)
    data.append('link_projeto', this.state.link_projeto)
    data.append('categoria', this.state.categoria)
    data.append('descricao', this.state.descricao)
    data.append('imagem', this.state.imagem)
    fetch(endpoints.projects, {
      method: 'POST',
      body: data
    }).then(response => console.log(response))

  }

  render() {
    return (
      <div class="log">
        <button class="btn btn-outline-primary" onClick={this.goBack}>
          Voltar para o site
        </button>
        <div>
          <div class="text-center">
            <form class="formContent">
              <div class="form-group">
                <img
                  class="mb-4 img-fluid"
                  src={logo}
                  alt=""
                  width="148"
                  height="148"
                ></img>
              </div>
              <div class="form-group">
                <h2>Registrar Projeto</h2>
              </div>
            </form>
          </div>
          <form class="formContent2">
            <div class="form-group">
              <label for="inputName">Título do projeto</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="Título do projeto"
                required
              ></input>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName">Link do artigo</label>
                <input
                  type="text"
                  class="form-control"
                  id="article-link"
                  placeholder="Link do artigo (opcional)"
                ></input>
              </div>
              <div class="form-group col-md-6">
                <label for="exampleFormControlSelect1">Categoria</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>exemplo 1</option>
                  <option>exemplo 2</option>
                  <option>exemplo 3</option>
                  <option>exemplo 4</option>
                  <option>exemplo 5</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Descrição do projeto
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <div class="form-group">
                <label for="exampleFormControlFile1">Imagem do projeto</label>
                <input
                  type="file"
                  onChange={this.imgChange}
                  class="form-control-file"
                  id="exampleFormControlFile1"
                ></input>
              </div>
            </div>
            <div class="form-group">
              <div>
                <label for="exampleDynamicInputFields">
                  Adicionar participantes
                </label>
              </div>
              <div>
                {this.state.participants.map((participant, index) => {
                  return (
                    <div key={index} class="form-row">
                      <div class="form-group col-md-8">
                        <input
                          onChange={e => this.handleChange(e, index)}
                          value={participant}
                          type="text"
                          class="form-control"
                          placeholder="Adicionar participante"
                          required
                        ></input>
                      </div>
                      <div class="form-group col-md-2">
                        <button
                          onClick={() => this.handleRemove(index)}
                          class="btn btn-danger btn-block"
                          type="button"
                        >
                          Remover
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                <button
                  class="btn btn-warning"
                  type="button"
                  onClick={e => this.addParticipant(e)}
                >
                  Add
                </button>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" type="button" onClick={this.publish}>
                Registrar projeto
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default submitProject;
