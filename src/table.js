import React, { Component } from 'react';


class Tabela extends Component {

    render() {

        const { autores, removeAutor } = this.props;

        return (
            <table>
                <TableHead />
                <TableBody autores={autores} removeAutor={removeAutor} />
            </table>

        );
    }

}

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autor</th>
                <th>Livro</th>
                <th>Preco</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.autores.map((linhas, index) => {
        return (
            <tr key={index}>
                <td>{linhas.nome}</td>
                <td>{linhas.livro}</td>
                <td>{linhas.preco}</td>
                <td><button onClick={() => { props.removeAutor(index) }}>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

export default Tabela;
