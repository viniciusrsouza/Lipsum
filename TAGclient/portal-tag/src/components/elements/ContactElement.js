import React, { Component } from "react";
import "./ContactElement.css";

class ContactElement extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="row featurette">
          <div class="col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.819398102726!2d-34.946508785220395!3d-8.017551594226369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab198c1040db71%3A0xeefd7d59b3a40ce6!2sCEAGRI%20II%20-%20UFRPE!5e0!3m2!1spt-BR!2sbr!4v1570984241483!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              frameborder="0"
              //   style="border:0;"
              allowfullscreen=""
            ></iframe>
          </div>
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Contato. <span class="text-muted">Como chegar até nós.</span>
            </h2>
            <p class="lead">e-mail: lucas.albertins@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactElement;
