import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'App.css';
import Tabela from './table.js';
import Formulario from './Formulario';
import Header from './Header';



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
        <Header />
        <div className="container">
          <Formulario OnChangeSubmit={this.OnChangeSubmit} />
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        </div>
      </Fragment>
    );
  }

}

export default App;
