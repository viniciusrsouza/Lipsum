import React, { Component } from "react";
import "./submitProject.css";
import logo from "../images/logo2.png";

class submitProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      linkProject: null,
      category: null,
      description: null,
      file: null,
      participants: []
    };

    this.imgChange = this.imgChange.bind(this);
    this.addParticipant = this.addParticipant.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  imgChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
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
                  id="articleLink"
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
              <button class="btn btn-primary btn-block">
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
