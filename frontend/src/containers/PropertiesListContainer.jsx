import React from 'react'
import Api from '../common/api'

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
    console.log("Apagando: " + id)
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
        onClickPlus={this.onClickPlus}
        onClickClose={this.onClickClose}
      />
    )
  }
}

export default App
