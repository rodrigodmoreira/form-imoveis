import React from 'react'
import Api from '../common/api'
import { withRouter } from 'react-router'

import PropertiesListView from '../views/PropertiesListView'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      formAberto: false,
      properties: []
    }

    Api.get("/properties").then((res) => {
      this.setState({
        ...this.state,
        properties: res.data
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

  render () {
    return (
      <PropertiesListView
        properties={this.state.properties}
        formAberto={this.state.formAberto}
        onClickDelete={this.onClickDelete}
        onClickUpdate={this.onClickUpdate}
        onClickPlus={this.onClickPlus}
        onClickClose={this.onClickClose}
      />
    )
  }
}

export default withRouter(App)
