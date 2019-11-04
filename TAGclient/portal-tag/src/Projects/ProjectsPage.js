import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ReactDOM from "react-dom";
import "./ProjectsPage.css";
import { get, endpoints } from "../network/http-methods";
import { UserModal, callModal } from "../User/userModal";
import { getUserFromEmail } from "../utils";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    console.log("teste");
    console.log(ReactDOM);
    this.state = {
      modal: undefined
    }
    get(endpoints.projects, {}, response => {
      console.log(response);
      this.setState({
        projects: response
      });
    });

    this.showModal = this.showModal.bind(this)
  }

  renderTableData() {
    if (this.state.projects) {
      return this.state.projects.map((project, index) => {
        const { id, titulo, categoria, data_publicacao } = project;
        return (
          <tr>
            <td>{id}</td>
            <td>
              <a href={`/PageProject/${id}`}>{titulo}</a>
            </td>
            <td>{"author"}</td>
            <td>{categoria}</td>
            <td>{data_publicacao}</td>
          </tr>
        );
      });
    }
  }

  renderTableHeader() {
    const header = ["id", "titulo", "categoria", "data_publicacao"];
    return header.map((key, index) => {
      return (
        <th scope="col" key={index}>
          {key.toUpperCase()}
        </th>
      );
    });
  }

  async showModal() {
    console.log("funciona");
    getUserFromEmail("admin@admin.com", user =>{
      callModal(user)
    })
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="tabela">
          <div class="tabelaTitle">
            <div>
              <h2 class="d-inline">
                Projetos{" "}
                <span
                  role="button"
                  class="btn btn-outline-primary btn-sm rounded-circle"
                  onClick={this.showModal}
                >
                  +
                </span>
              </h2>
            </div>
            <a
              id="publicar"
              role="button"
              class="btn btn-warning"
              href="/submitProject"
            >
              Publicar Projeto
            </a>
            <div>
              <UserModal/>
            </div>
          </div>
          <div id="projects">
            <table class="table table-striped" id="projects">
              <thead>
                <tr>{this.renderTableHeader()}</tr>
              </thead>
              <tbody>{this.renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
