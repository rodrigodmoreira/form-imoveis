import React from 'react'

import ConstantesForm from '../../common/constants/Form'
import ConstantesImoveis from '../../common/constants/Imoveis'

import styles from './Form.module.css'

class Form extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            acao: props.acao,
            tipoImovel: ConstantesImoveis.Tipos.Apartamento,
            district: "",
            districtName: "",
            insertDistrict: false,
            address: "",
            insertAddress: false,
            quartos: "",
            suites: "",
            estar: "",
            jantar: "",
            area: "",
            vagas: "",
            andar: "",
            condominio: "",
            armario: false,
            porteiro: false,
            rua: "",
            numero: "",
            aluguel: "",
            descricao: "",
        }

        if(props.formEdit){
            debugger;
            this.state = {
                ...this.state,
                tipoImovel: props.formEdit.type.type,
                districtName: props.formEdit.address.district,
                address: props.formEdit.address.street,
                quartos: props.formEdit.qt_rooms,
                suites: props.formEdit.qt_suites,
                estar: props.formEdit.qt_lvrooms,
                jantar: "",
                area: props.formEdit.area,
                vagas: props.formEdit.qt_vacancies,
                andar: "",
                condominio: "",
                armario: props.formEdit.builtin_cabinet,
                porteiro: false,
                rua: "",
                numero: "",
                aluguel: props.formEdit.rent,
                descricao: props.formEdit.description,
            }
        }
    }

    handleChange = (event) => {
        const value = event.target.value

        switch(event.target.name){
            case ConstantesForm.Campos.quartos:
                this.setState({ quartos: value})
                break
            case ConstantesForm.Campos.suites:
                this.setState({ suites: value})
                break
            case ConstantesForm.Campos.estar:
                this.setState({ estar: value})
                break
            case ConstantesForm.Campos.jantar:
                this.setState({ jantar: value})
                break
            case ConstantesForm.Campos.area:
                this.setState({ area: value})
                break
            case ConstantesForm.Campos.vagas:
                this.setState({ vagas: value})
                break
            case ConstantesForm.Campos.andar:
                this.setState({ andar: value})
                break
            case ConstantesForm.Campos.condominio:
                this.setState({ condominio: value})
                break
            case ConstantesForm.Campos.dropdownType:
                this.setState({ tipoImovel: value})
                break
            case ConstantesForm.Campos.dropdownDistrict:
                this.setState({ 
                    district: value,
                    insertDistrict: value==="100",
                    insertAddress: true
                });
                value!=="0" && this.props.getAddress(value);
                break
            case ConstantesForm.Campos.dropdownAddress:
                this.setState({ 
                    address: value,
                    insertAddress: value==="100"
                });
                break
            case ConstantesForm.Campos.novaRua:
                this.setState({ rua: value});
                break
            case ConstantesForm.Campos.novoNumero:
                this.setState({ numero: value});
                break
            case ConstantesForm.Campos.novoBairro:
                this.setState({ districtName: value});
                break
            case ConstantesForm.Campos.aluguel:
                this.setState({ aluguel: value});
                break
            case ConstantesForm.Campos.descricao:
                this.setState({ descricao: value});
                break
            case ConstantesForm.Campos.armario:
                this.setState({ armario: event.target.checked})
                break
            case ConstantesForm.Campos.porteiro:
                this.setState({ porteiro: event.target.checked})
                break
            default:
                break
        }
    }
    
    handleSubmit = (event) => {
        const { acao, tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio, address, armario, porteiro, aluguel, descricao } = this.state
        acao(tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio, address, armario, porteiro, aluguel, descricao, this.props.formEdit)
        event.preventDefault()
    }

    insertDistrict = (event) => {
        const { districtName } = this.state;
        const { setDistrict } = this.props;

        setDistrict(districtName);
    }

    insertAddress = (event) => {
        const { district, rua, numero } = this.state;
        const { setAddress } = this.props;

        setAddress(district, rua, numero);
    }
    render(){
        const { tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio, armario, porteiro, insertAddress, insertDistrict, rua, numero, districtName, aluguel, descricao } = this.state;
        const { districts, address } = this.props;
        return(
            <div className={styles["container"]}>
                <div className={styles["form"]}>
                    <div className={styles["title"]}> Insira os dados do imóvel</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div className={styles["check"]}>Tipo do Imóvel:</div>
                            <select id = "dropdownType" name={ConstantesForm.Campos.dropdownType} onChange={this.handleChange}>
                                <option value = {ConstantesImoveis.Tipos.Apartamento}>Apartamento</option>
                                <option value = {ConstantesImoveis.Tipos.Casa}>Casa</option>
                            </select>
                        </label>
                        <label>
                            <div className={styles["check"]}>Bairro do Imóvel:</div>
                            <select id = "dropdownDistrict" name={ConstantesForm.Campos.dropdownDistrict} onChange={this.handleChange}>
                                {districts.map(districts => (
                                    <option key={districts.id} value = {districts.id}>{districts.name}</option>
                                ))}
                                <option value = {100}>{"Adicionar Bairro"}</option>
                            </select>
                        </label>
                        {insertDistrict && <label>
                            <br></br>
                            <span className={styles["check"]}>Nome do Bairro:</span>
                            <input type="text" name={ConstantesForm.Campos.novoBairro} placeholder="Nome do Bairro" value={ districtName } onChange={this.handleChange} />
                        </label>}
                        {insertDistrict && <input className={styles["button"]} type="button" onClick={this.insertDistrict} value="Criar Bairro" />}

                        {address && <label>
                            <div className={styles["check"]}>Endereço do Imóvel:</div>
                            <select id = "dropdownAddress" name={ConstantesForm.Campos.dropdownAddress} onChange={this.handleChange}>
                                {address.map(address => (
                                    <option key={address.id} value = {address.id}>{`${address.street} , ${address.number}`}</option>
                                ))}
                                <option value = {100}>{"Adicionar Endereço"}</option>
                            </select>
                        </label>}
                        {insertAddress && <label>
                            <br></br>
                            <span className={styles["check"]}>Nome da Rua:</span>
                            <input type="text" name={ConstantesForm.Campos.novaRua} placeholder="Nome da Rua" value={ rua } onChange={this.handleChange} />
                        </label>}
                        {insertAddress && <label>
                            <span className={styles["check"]}>Número:</span>
                            <input type="number" name={ConstantesForm.Campos.novoNumero} placeholder="Número" value={ numero } onChange={this.handleChange} />
                        </label>}
                        {insertAddress && <input className={styles["button"]} type="button" onClick={this.insertAddress} value="Criar Endereco" />}

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
                        <label>
                            <span className={styles["check"]}>Valor do Aluguel:</span>
                            <input type="number" name={ConstantesForm.Campos.aluguel} placeholder="Aluguel R$" value={ aluguel } onChange={this.handleChange} />
                        </label>
                        <label>
                            <span className={styles["check"]}>Descrição:</span>
                            <input type="text" name={ConstantesForm.Campos.descricao} placeholder="Descricao" value={ descricao } onChange={this.handleChange} />
                        </label>
                        <label>
                            <div className={styles["checkBox"]}>
                                <input type="checkbox" name={ConstantesForm.Campos.armario} value={ConstantesForm.Campos.armario} checked={armario} onChange={this.handleChange} /> Tem armário embutido
                            </div>
                        </label>
                        {tipoImovel === ConstantesImoveis.Tipos.Apartamento && <label>
                            <div className={styles["checkBox"]}>
                                <input type="checkbox" name={ConstantesForm.Campos.porteiro} value={ConstantesForm.Campos.porteiro} checked={porteiro} onChange={this.handleChange} /> Tem porteiro 24h
                            </div>
                        </label>}
                        <input className={styles["button"]} type="submit" value="Criar Quarto" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
