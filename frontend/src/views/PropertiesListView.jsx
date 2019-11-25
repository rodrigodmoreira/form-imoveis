import React from 'react'

import ItemListagem from '../components/ItemListagem'
import ItemAdicionar from '../components/ItemAdicionar'
import Form from '../components/Form'

const PropertiesListView = props => (
  <div className="App">
    <header className="App-header">
      {props.properties.map(property => (
        <ItemListagem 
          tipo={property.type.name} 
          rua={property.address.street}
          bairro={property.address.district}
          metrosQuadrados={property.area}
          numeroQuartos={property.qt_rooms}
          rent={property.rent}
        />
      ))}

      <ItemAdicionar acao={props.onClickPlus}/>

      {props.formAberto &&
        <Form acao={props.onClickClose} />
      }
    </header>
  </div>
)

export default PropertiesListView
