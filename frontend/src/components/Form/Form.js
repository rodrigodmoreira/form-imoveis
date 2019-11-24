import React from 'react';

import ConstantesForm from '../../common/constants/Form';
import ConstantesImoveis from '../../common/constants/Imoveis';

import styles from './Form.module.css';

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            acao: props.acao,
            tipoImovel: ConstantesImoveis.Tipos.Apartamento,
            quartos: null,
            suites: null,
            estar: null,
            jantar: null,
            area: null,
            vagas: null,
            andar: null,
            condominio: null,
        };
    }

    handleChange = (event) => {
        const value = event.target.value;

        switch(event.target.name){
            case ConstantesForm.Campos.quartos:
                this.setState({ quartos: value});
                break;
            case ConstantesForm.Campos.suites:
                this.setState({ suites: value});
                break;
            case ConstantesForm.Campos.estar:
                this.setState({ estar: value});
                break;
            case ConstantesForm.Campos.jantar:
                this.setState({ jantar: value});
                break;
            case ConstantesForm.Campos.area:
                this.setState({ area: value});
                break;
            case ConstantesForm.Campos.vagas:
                this.setState({ vagas: value});
                break;
            case ConstantesForm.Campos.andar:
                this.setState({ andar: value});
                break;
            case ConstantesForm.Campos.condominio:
                this.setState({ condominio: value});
                break;
            case ConstantesForm.Campos.dropdownType:
                this.setState({ tipoImovel: value});
                break;
            default:
                break;
        }
    }
    
    handleSubmit = (event) => {
        const { acao, checkIn, checkOut } = this.state;
        acao(checkIn, checkOut);
        event.preventDefault();
    }

    render(){
        const { tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio } = this.state;
     
        return(
            <div className={styles["container"]}>
                <div className={styles["form"]}>
                    <div className={styles["title"]}> Insira os dados do imóvel</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div className={styles["check"]}>Tipo do Imóvel:</div>
                            <select id = "myList" name={ConstantesForm.Campos.dropdownType} onChange={this.handleChange}>
                                <option value = {ConstantesImoveis.Tipos.Apartamento}>Apartamento</option>
                                <option value = {ConstantesImoveis.Tipos.Casa}>Casa</option>
                            </select>
                        </label>
                        <label>
                            <br></br>
                            <span className={styles["check"]}>Numero de Quartos:</span>
                            <input type="number" name={ConstantesForm.Campos.quartos} placeholder="Numero de Quartos" value={ quartos } onChange={this.handleChange} />
                        </label>
                        <label>
                            <span className={styles["check"]}>Número de Suítes:</span>
                            <input type="number" name={ConstantesForm.Campos.suites} placeholder="Número de Suítes" value={ suites } onChange={this.handleChange} />
                        </label>
                        <label>
                            <span className={styles["check"]}>Salas de Estar:</span>
                            <input type="number" name={ConstantesForm.Campos.estar} placeholder="Número de Sala de Estar" value={ estar } onChange={this.handleChange} />
                        </label>
                        {tipoImovel === ConstantesImoveis.Tipos.Apartamento && <label>
                            <span className={styles["check"]}>Salas de Jantar:</span>
                            <input type="number" name={ConstantesForm.Campos.jantar} placeholder="Número de Sala de Jantar" value={ jantar } onChange={this.handleChange} />
                        </label>}
                        <label>
                            <span className={styles["check"]}>Área em metros Quadrados:</span>
                            <input type="number" name={ConstantesForm.Campos.area} placeholder="Área em m2" value={ area } onChange={this.handleChange} />
                        </label>
                        <label>
                            <span className={styles["check"]}>Vagas de Garagem:</span>
                            <input type="number" name={ConstantesForm.Campos.vagas} placeholder="Vagas de Garagem" value={ vagas } onChange={this.handleChange} />
                        </label>
                        {tipoImovel === ConstantesImoveis.Tipos.Apartamento && <label>
                            <span className={styles["check"]}>Andar:</span>
                            <input type="number" name={ConstantesForm.Campos.andar} placeholder="Andar" value={ andar } onChange={this.handleChange} />
                        </label>}
                        {tipoImovel === ConstantesImoveis.Tipos.Apartamento && <label>
                            <span className={styles["check"]}>Valor do Condomínio:</span>
                            <input type="number" name={ConstantesForm.Campos.condominio} placeholder="Condominio R$" value={ condominio } onChange={this.handleChange} />
                        </label>}
                        <input type="checkbox" name="vehicle" value="Bike" /> I have a bike
                        <input className={styles["button"]} type="submit" value="Ver Quartos" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;