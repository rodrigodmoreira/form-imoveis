import React from 'react'
import Api from '../common/api'
import { withRouter } from 'react-router'

import PropertiesListView from '../views/PropertiesListView'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      formAberto: false,
      properties: [],
      districts: [],
      address: null,
    }

    Api.get("/properties").then((res) => {
      this.setState({
        ...this.state,
        properties: res.data
      })
    });

    Api.get("/addresses/districts").then((res) => {
      this.setState({
        districts: res.data
      });

      this.state.districts && this.state.districts[0] && Api.get(`/addresses?districts=${encodeURI(JSON.stringify([this.state.districts[0].id]))}`).then((res) => {
        this.setState({
          address: res.data
        });
      });
    })
  }

  onClickDelete = (id) => {
    Api.delete(`/properties/${id}`).then(() => this.props.history.go('/'))
  }

  onClickUpdate = (property) => {
    this.setState({
      formAberto: true,
      formEditProp: property,
    });
  }

  onClickPlus = () => {
    this.setState({
      formAberto: true,
      formEditProp: "",
    })
  }

  onClickClose = (tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio, address, armario, porteiro, aluguel, descricao, formEdit) => {
    debugger;
    if(formEdit){
      Api.put(`/properties/${formEdit.id}`, {
        // type_id: tipoImovel,
        // addresses_id: address,         
        qt_rooms: quartos,
        qt_suites: suites,
        qt_lvrooms: estar,
        qt_vacancies: vagas,
        area: area,
        builtin_cabinet: armario,    
        description: descricao,
        rent: aluguel
      }).then(() => this.props.history.go('/'))
    }
    else{
      Api.post('/properties', {
        property: {
          type_id: tipoImovel,
          addresses_id: address,         
          qt_rooms: quartos,
          qt_suites: suites,
          qt_lvrooms: estar,
          qt_vacancies: vagas,
          area: area,
          builtin_cabinet: armario,    
          description: descricao,
          rent: aluguel
        },
        property_extras: {
          qt_dnrooms: jantar,
          floor: andar,
          condo_value: condominio,
          lobby_24h: porteiro       
        }
      }).then(() => this.props.history.go('/'))
    }


    // MEIO Q INÚTIL JÀ Q A PÁGINA ATUALIZA ANTES
    this.setState({
      formAberto: false
    })
  }

  getAddress = async (districtId) => {
    
    const params = encodeURI(JSON.stringify([districtId]));
 
    await Api.get(`/addresses?districts=${params}`).then((res) => {
      this.setState({
        address: res.data
      })
    })
  }

  setDistrict = async (districtName) => {
    debugger;
    await Api.post("/addresses/districts", {name: districtName}).then((res) => {
      this.props.history.go('/');
    })
  }

  setAddress = async (district, rua, numero) => {
    await Api.post("/addresses", {street: rua, number: numero, district_id: district}).then((res) => {
      this.props.history.go('/');
    })
  }

  render () {
    const { 
      properties, 
      districts, 
      formAberto, 
      address,
      formEditProp,
    } = this.state;

    return (
      <PropertiesListView
        properties={properties}
        districts={districts}
        address={address}
        formAberto={formAberto}
        onClickDelete={this.onClickDelete}
        onClickUpdate={this.onClickUpdate}
        onClickPlus={this.onClickPlus}
        onClickClose={this.onClickClose}
        getAddress={this.getAddress}
        setDistrict={this.setDistrict}
        setAddress={this.setAddress}
        formEdit={formEditProp}
      />
    )
  }
}

export default withRouter(App)
