import React from "react";
import Element from "./Element.js";
import logo from "../../images/logo2.png";
import "./AboutElement.css";

class AboutElement extends Element {
  getChildren() {
    return (
      <div>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Quem somos. <span class="text-muted">Saiba mais sobre nós.</span>
            </h2>
            <p class="lead">
              The TAG group aims to develop innovative approaches to support
              testing in order to improve the quality and performance of the
              testing process. The precise application of automation is one of
              our cornerstones, which helps us to provide our partners with the
              expected results. Our crew's diverse background allows us to give
              feedback and to offer techniques to reach our goals. Therefore,
              let us help you build an agile and efficient verification
              environment.
            </p>
          </div>
          <div class="col-md-5">
            <img src={logo} width="100%"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutElement;
