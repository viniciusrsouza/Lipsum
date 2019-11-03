import React, { Component } from "react";
import NavBar from "../components/NavBar";
import "./PageProject.css";
import image from "../images/bg-4.jpg";
import { get, endpoints } from "../network/http-methods";
import { withRouter } from "react-router-dom";

class PageProject extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.projectId;
    console.log("id=", id);
    get(endpoints.projects, { id: id }, response => {
      console.log(response);
      const project = response.find(element => element.id == id);
      this.setState({ project: project });
    });
    this.state = {
      project: {
        id: 2,
        titulo: "Descoberta a detecção de phishing através do xablau",
        link_projeto: "https://onepieceex.net/",
        autor: "fulano",
        participantes: ["sicrano", "beltrano"],
        categoria: "Segurança da Informação",
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin nulla ligula, eget venenatis erat dictum vitae. Etiam in erat efficitur, elementum diam eget, porttitor tellus. Nulla interdum maximus aliquet. In sagittis posuere fermentum. Aenean eu sollicitudin lorem. Curabitur id justo lorem. Nullam accumsan sem sapien, eget vestibulum felis consequat sagittis. Etiam ut elit finibus, iaculis sapien ac, aliquam elit. Quisque porta, eros non fermentum elementum, sem nibh sodales mauris, aliquet rutrum augue dolor consequat felis. Aliquam ex nisl, facilisis eu posuere iaculis, viverra vel risus. Fusce a efficitur dui. \nNam posuere dolor velit. Maecenas vel leo non orci euismod mollis sit amet quis metus. Curabitur arcu dui, sodales efficitur urna vel, gravida imperdiet sem. Cras eget dolor porttitor, interdum metus suscipit, aliquam urna. Sed ac elit non nisi vulputate tincidunt. Pellentesque ut felis non risus gravida consectetur aliquam sed leo. Sed a leo a massa consectetur volutpat. In hac habitasse platea dictumst. Pellentesque orci odio, dapibus id varius a, luctus posuere leo. Etiam mollis nisl non mi placerat tincidunt. Phasellus ac nunc in massa viverra pretium vitae varius dui. Maecenas in eleifend sem, in egestas odio. Morbi tempus diam diam, non placerat nisi tincidunt eget. \nDonec ut lacus tincidunt, rhoncus purus eget, ullamcorper nibh. Quisque et mauris luctus, dapibus nulla sit amet, scelerisque mi. Nulla varius consequat iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut tristique nibh. Vestibulum id mollis orci. Aenean pulvinar turpis at neque lacinia, non feugiat nibh consectetur. Quisque ultrices at mauris quis tincidunt.",
        data_publicacao: "29/10/2019",
        imagem: ""
      }
    };
  }

  render() {
    return (
      <div class="individual">
        <NavBar />
        <div id="cabeca">
          <p class="text-muted">Categoria: {this.state.project.categoria}</p>
          <img id="teste" src={this.state.project.imagem} />
          <h1>{this.state.project.titulo}</h1>
        </div>
        <div
          id="infoAdicional"
          class="border-bottom border-top border-primary text-muted"
        >
          <p>
            Autor: {this.state.project.autor}
            <br />
            Participantes:
            <ul>
              {
                //this.state.project.participantes.map(participant => (
                //<li>{participant}</li>
                //))
              }
            </ul>
            Data de publicação: {this.state.project.data_publicacao}
          </p>
        </div>
        <div id="text">
          <p>{this.state.project.descricao}</p>
        </div>
        <div id="link">
          <p class="text-muted">
            Link de publicação do projeto:{" "}
            <a href={this.state.project.link_projeto}>
              {this.state.project.link_projeto}
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(PageProject);
