import React, { Component } from 'react';


const TableHead = () => {
    return <thead>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preços</th>
        <td><button>Remover</button></td>
    </thead>
}

const TableBody = props => {

    const linhas = props.autores.map((linhas, index) => {
        return (
            <tr>
                <td>{linhas.nome}</td>
                <td>{linhas.livro}</td>
                <td>{linhas.preco}</td>
                <td><button>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {

    render() {

        const { autores } = this.props;

        return (
            <table>
                <TableHead />
                <TableBody autores={autores} />
            </table>

        );
    }

}
export default Tabela;
