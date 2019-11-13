import React from 'react';

import ItemListagem from './components/ItemListagem';
import ItemAdicionar from './components/ItemAdicionar';
import Form from './components/Form';

class App extends React.Component {

  state = {
    formAberto: false,
  }

  render(){
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

          {this.state.formAberto && <Form acao={() => this.onClickClose}/>}

          
        </header>
      </div>
    );
  }

  onClickPlus = () => {

    this.setState({
      formAberto: true
    })
  }

  onClickClose = () => {

    this.setState({
      formAberto: false
    })
  }
}

export default App;
