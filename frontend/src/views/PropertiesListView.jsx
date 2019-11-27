import React from 'react'

import ItemListagem from '../components/ItemListagem'
import ItemAdicionar from '../components/ItemAdicionar'
import Form from '../components/Form'
import Header from '../components/Header'

const PropertiesListView = props => (
  <React.Fragment>
    <Header />
    <div className="List">
        {props.properties.map(property => (
          <ItemListagem 
            key={property.id}
            property={property}
            onDelete={props.onClickDelete}
            onUpdate={props.onClickUpdate}
          />
        ))}

        <ItemAdicionar acao={props.onClickPlus}/>

        {props.formAberto &&
          <Form 
            formEdit={props.formEdit}
            acao={props.onClickClose} 
            districts={props.districts}
            address={props.address}
            getAddress={props.getAddress}
            setDistrict={(districtName) => props.setDistrict(districtName)}
            setAddress={(district, rua, numero) => props.setAddress(district, rua, numero)}
          />
        }
    </div>
  </React.Fragment>
)

export default PropertiesListView
