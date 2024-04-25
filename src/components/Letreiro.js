// Atividade 2:
//  Implemente um componente react com um letreiro que 
// simule a digitação do texto Conheça a Fatec de forma 
// que a digitação fique em looping.

import React from "react";

class Letreiro extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          texto: '',
          index: 0
      };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 200);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
      const { texto, index } = this.state;
      if (index >= this.props.texto.length) {
          this.setState({
              texto: '',
              index: 0
          });
      } else {
          const novoTexto = this.props.texto.slice(0, index + 1);
          this.setState({
              texto: novoTexto,
              index: index + 1
          });
      }
    }

    render() {
        return <h2>{this.state.texto}</h2>;
    }
  }

  export default Letreiro;