import React from 'react';
import Axios from 'axios';

import ItemListagem from './components/ItemListagem';
import ItemAdicionar from './components/ItemAdicionar';
import Form from './components/Form';

class App extends React.Component {

  state = {
    formAberto: false,
  }

  render(){
    Axios.get("http://localhost:3676/properties").then((response) => {
      console.log(response.data);
    })
    return (
      <div className="App">
        <header className="App-header">
          <ItemListagem 
            tipo="casa" 
            rua="amazonas" 
            bairro="nova suissa" 
            metrosQuadrados="100" 
            numeroQuartos="4"
          />
  
          <ItemListagem 
            tipo="apartamento" 
            rua="amazonas" 
            bairro="nova suissa" 
            metrosQuadrados="100" 
            numeroQuartos="4"
          />  
          <ItemListagem 
            tipo="apartamento" 
            rua="amazonas" 
            bairro="nova suissa" 
            metrosQuadrados="100" 
            numeroQuartos="4"
          /> 
          <ItemListagem 
            tipo="apartamento" 
            rua="amazonas" 
            bairro="nova suissa" 
            metrosQuadrados="100" 
            numeroQuartos="4"
          /> 
          <ItemListagem 
            tipo="apartamento" 
            rua="amazonas" 
            bairro="nova suissa" 
            metrosQuadrados="100" 
            numeroQuartos="4"
          /> 
          <ItemListagem 
            tipo="apartamento" 
            rua="amazonas" 
            bairro="nova suissa" 
            metrosQuadrados="100" 
            numeroQuartos="4"
          /> 
          <ItemAdicionar acao={() => this.onClickPlus}/>

          {this.state.formAberto && <Form acao={(tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio) => this.onClickClose(tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio)}/>}

          
        </header>
      </div>
    );
  }

  onClickPlus = () => {

    this.setState({
      formAberto: true
    })
  }

  onClickClose = (tipoImovel, quartos, suites, estar, jantar, area, vagas, andar, condominio) => {
    debugger;
    this.setState({
      formAberto: false
    })
  }
}

export default App;
