import React from 'react';

import ItemListagem from './components/ItemListagem'

function App() {
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
        
      </header>
    </div>
  );
}

export default App;
