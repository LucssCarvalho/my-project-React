import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './table.js'
import Formulario from './Formulario';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '800'
      },
      {
        nome: 'Marcos',
        livro: 'Designer',
        preco: '700'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '600'
      },
      {
        nome: 'Lucas',
        livro: 'Flutter',
        preco: '1200'
      },
    ],
  };

  removeAutor = index => {

    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
  }

  OnChangeSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
  }

  render() {
    return (
      <Fragment>
        <Formulario OnChangeSubmit={this.OnChangeSubmit} />
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />

      </Fragment>
    );
  }

}

export default App;
