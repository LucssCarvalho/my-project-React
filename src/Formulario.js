import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInitial = {
            nome: "",
            livro: "",
            preco: ""
        }
        this.state = this.stateInitial;

    }

    onChangeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

    }

    submitForm = () => {
        this.props.OnChangeSubmit(this.state);
        this.setState(this.stateInitial);
    }

    render() {

        const { nome, livro, preco } = this.state

        return <form>
            <label htmlFor='nome'>Nome</label>
            <input
                id="nome"
                type="text"
                name="nome"
                value={nome}
                onChange={this.onChangeInput}
            />
            <label htmlFor='livro'>Livro</label>
            <input
                id="livro"
                type="text"
                name="livro"
                value={livro}
                onChange={this.onChangeInput}
            />
            <label htmlFor='preco'>Preço</label>
            <input
                id="preco"
                type="text"
                name="preco"
                value={preco}
                onChange={this.onChangeInput}
            />
            <button onClick={this.submitForm} type="button">Salvar</button>
        </form>
    }
}
export default Formulario;