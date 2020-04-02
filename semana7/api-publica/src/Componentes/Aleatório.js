import React from "react";
import axios from "axios";
import styled from "styled-components"

class Aleatório extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activityInfo: undefined
    };
  }

  componentDidMount() {
    this.getActivity();
  }

  getActivity = () => {
    axios.get("https://www.boredapi.com/api/activity").then((response) => {
      this.setState({ activityInfo: response.data });
    });
  };

  render() {
    return (
      <div className="Aleatório">
        <button onClick={this.getActivity}>Pegar atividade</button>
        {this.state.activityInfo && (
          <div>
            <p>
              <strong>Nome: </strong>
              {this.state.activityInfo.activity}
            </p>
            <p>
              <strong>Acessibilidade: </strong>
              {this.state.activityInfo.accessibility}
            </p>
            <p>
              <strong>Tipo: </strong>
              {this.state.activityInfo.type}
            </p>
            <p>
              <strong>Participantes: </strong>
              {this.state.activityInfo.participants}
            </p>
            <p>
              <strong>Preço: </strong>
              {this.state.activityInfo.price}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Aleatório;
