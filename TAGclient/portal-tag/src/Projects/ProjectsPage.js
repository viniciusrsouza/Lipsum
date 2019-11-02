import React, { Component } from "react";
import NavBar from "../components/NavBar";
import ReactDOM from 'react-dom'
import "./ProjectsPage.css";
import { get, endpoints } from "../network/http-methods";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    console.log("teste")
    console.log(ReactDOM)
    get(endpoints.projects, {}, response => {
      console.log(response)
      this.setState({
        projects: response
      })
      const node = ReactDOM.
      document.getElementById('projects').appendChild(
      )
    })
  }

  renderTableData() {
    if(this.state){
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
    const header = ['id', 'titulo', 'categoria', 'data_publicacao']
    return header.map((key, index) => {
      return (
        <th scope="col" key={index}>
          {key.toUpperCase()}
        </th>
      );
    });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div class="tabela">
          <div class="tabelaTitle">
            <h2>Projetos</h2>
            <a
              id="publicar"
              role="button"
              class="btn btn-warning"
              href="/submitProject"
            >
              Publicar Projeto
            </a>
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
