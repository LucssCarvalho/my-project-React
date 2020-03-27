import React, { Component } from 'react';
import FormValidator from './FormValidator'
class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator({
            campo: 'nome',
            metodo: 'isEmpty',
        });

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
        if (this.validator.validar(this.state)) {
            this.props.OnChangeSubmit(this.state);
            this.setState(this.stateInitial);
        }

    }

    render() {

        const { nome, livro, preco } = this.state

        return <form>
            <div className="row">
                <div className="input-field col s4">
                    <label className="input-field" htmlFor='nome'>Nome</label>
                    <input
                        className="validate"
                        id="nome"
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={this.onChangeInput}
                    />
                </div>
                <div className="input-field col s4">
                    <label className="input-field" htmlFor='livro'>Livro</label>
                    <input
                        className="validate"
                        id="livro"
                        type="text"
                        name="livro"
                        value={livro}
                        onChange={this.onChangeInput}
                    />
                </div>
                <div className="input-field col s4">
                    <label className="input-field" htmlFor='preco'>Preço</label>
                    <input
                        className="validate"
                        id="preco"
                        type="text"
                        name="preco"
                        value={preco}
                        onChange={this.onChangeInput}
                    />
                </div>

            </div>

            <button onClick={this.submitForm} type="button" className="waves-effect waves-light indigo lighten-2 btn">Salvar</button>

        </form>
    }
}
export default Formulario;