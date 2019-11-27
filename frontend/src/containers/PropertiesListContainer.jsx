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
      })
    })
  }

  onClickDelete = (id) => {
    Api.delete(`/properties/${id}`).then(() => this.props.history.go('/'))
  }

  onClickUpdate = (property) => {
    console.log(this.props)
  }

  onClickPlus = () => {
    this.setState({
      formAberto: true
    })
  }

  onClickClose = (tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio) => {
    this.setState({
      formAberto: false
    })
  }

  getAddress = async (districtId) => {
    
    const params = encodeURI(JSON.stringify([1]));
    debugger;
    await Api.get(`/addresses?districts=${params}`).then((res) => {
      this.setState({
        address: res.data
      })
    })
  }

  render () {
    const { 
      properties, 
      districts, 
      formAberto, 
      address,
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
      />
    )
  }
}

export default withRouter(App)
