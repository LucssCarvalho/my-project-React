import React from 'react';
import './App.css';
import Tabela from './table.js'

function App() {

  const autores = [
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
  ]

  return (
    <div className="App">
      <Tabela autores={autores} />
    </div>
  );
}

export default App;
