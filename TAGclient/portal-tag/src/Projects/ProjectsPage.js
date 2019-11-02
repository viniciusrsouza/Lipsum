import React, { Component } from "react";
import NavBar from "../components/NavBar";
import "./ProjectsPage.css";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 2,
          title: "second",
          author: "fulano",
          category: "categoria 1",
          date: "29/10/2019"
        },
        {
          id: 1,
          title: "first",
          author: "beltrano",
          category: "categoria 2",
          date: "20/10/2019"
        }
      ]
    };
  }

  renderTableData() {
    return this.state.projects.map((project, index) => {
      const { id, title, author, category, date } = project;
      return (
        <tr>
          <td>{id}</td>
          <td>
            <a href="/PageProject">{title}</a>
          </td>
          <td>{author}</td>
          <td>{category}</td>
          <td>{date}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.projects[0]);
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
          <table class="table table-striped">
            <thead>
              <tr>{this.renderTableHeader()}</tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProjectsPage;
