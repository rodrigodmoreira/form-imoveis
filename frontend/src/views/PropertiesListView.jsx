import React from 'react'

import ItemListagem from '../components/ItemListagem'
import ItemAdicionar from '../components/ItemAdicionar'
import Form from '../components/Form'
import Header from '../components/Header'

const PropertiesListView = props => (
  <React.Fragment>
    <Header />
    <div class="List">
        {props.properties.map(property => (
          <ItemListagem 
            property={property}
            onDelete={props.onClickDelete}
            onUpdate={props.onClickUpdate}
          />
        ))}

        <ItemAdicionar acao={props.onClickPlus}/>

        {props.formAberto &&
          <Form acao={props.onClickClose} />
        }
    </div>
  </React.Fragment>
)

export default PropertiesListView
