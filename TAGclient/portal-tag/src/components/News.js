import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import bg from "../images/bg-1.jpg";
import bg2 from "../images/bg-2.jpg";
import bg3 from "../images/bg-3.jpg";

class News extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={bg} class="d-block w-100" alt="First slide"></img>

            <Carousel.Caption>
              <h2>Primeira notícia</h2>
              <p>Notícia mais recente do banco de notícias</p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">
                  Saiba mais
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={bg2} class="d-block w-100" alt="First slide"></img>

            <Carousel.Caption>
              <h2>Segunda notícia</h2>
              <p>Notícia seguinte do banco de notícias</p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">
                  Saiba mais
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={bg3} class="d-block w-100" alt="First slide"></img>

            <Carousel.Caption>
              <h2>Terceira notícia</h2>
              <p>Notícia posterior do banco de notícias</p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button">
                  Saiba mais
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <button type="button" link="#" class="btn btn-outline-info btn-lg">
            Ver todas as notícias
          </button>
        </div>
      </div>
    );
  }
}

export default News;
