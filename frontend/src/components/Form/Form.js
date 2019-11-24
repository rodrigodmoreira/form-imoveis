import React from 'react';

import ConstantesImoveis from '../../common/constants/Imoveis';

import styles from './Form.module.css';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            checkIn: '',
            checkOut: '',
            acao: props.acao,
            tipoImovel: ConstantesImoveis.Tipos.Apartamento,
        };
    }

    handleChangeCheckIn = (event) => {
        this.setState({checkIn: event.target.value});
    }

    handleChangeCheckOut = (event) => {
        this.setState({checkOut: event.target.value});
    }
    
    handleSubmit = (event) => {
        const { acao, checkIn, checkOut } = this.state;
        acao(checkIn, checkOut);
        event.preventDefault();
    }

    handleChangeDropDown = (event) => {
        console.log(event.target.value);
        this.setState({tipoImovel: event.target.value})
    }

    render(){
        const { tipoImovel } = this.state;
     
        return(
            <div className={styles["container"]}>
                <div className={styles["form"]}>
                    <div className={styles["title"]}> Insira os dados do imóvel</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div className={styles["check"]}>Tipo do Imóvel:</div>
                            <select id = "myList" onChange={this.handleChangeDropDown}>
                                <option value = {ConstantesImoveis.Tipos.Apartamento}>Apartamento</option>
                                <option value = {ConstantesImoveis.Tipos.Casa}>Casa</option>
                            </select>
                        </label>
                        <label>
                            <br></br>
                            <span className={styles["check"]}>Numero de Quartos:</span>
                            <input type="number" placeholder="Numero de Quartos" value={this.state.checkIn} onChange={this.handleChangeCheckIn} />
                        </label>
                        <label>
                            <span className={styles["check"]}>Número de Suítes:</span>
                            <input type="number" placeholder="Número de Suítes" value={this.state.checkOut} onChange={this.handleChangeCheckOut} />
                        </label>
                        <label>
                            <span className={styles["check"]}>Salas de Estar:</span>
                            <input type="number" placeholder="Número de Sala de Estar" value={this.state.checkOut} onChange={this.handleChangeCheckOut} />
                        </label>
                        {tipoImovel === ConstantesImoveis.Tipos.Apartamento && <label>
                            <span className={styles["check"]}>Salas de Jantar:</span>
                            <input type="number" placeholder="Número de Sala de Jantar" value={this.state.checkOut} onChange={this.handleChangeCheckOut} />
                        </label>}
                        <label>
                            <span className={styles["check"]}>Área em metros Quadrados:</span>
                            <input type="number" placeholder="Área em m2" value={this.state.checkOut} onChange={this.handleChangeCheckOut} />
                        </label>
                        <label>
                            <span className={styles["check"]}>Vagas de Garagem:</span>
                            <input type="number" placeholder="Vagas de Garagem" value={this.state.checkOut} onChange={this.handleChangeCheckOut} />
                        </label>
                        <input type="checkbox" name="vehicle" value="Bike" /> I have a bike
                        <input className={styles["button"]} type="submit" value="Ver Quartos" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;