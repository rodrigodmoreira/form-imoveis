import React from 'react'

import { FaTrash, FaEdit, FaBed, FaRulerHorizontal, FaCar } from 'react-icons/fa'

import styles from './ItemListagem.module.css'

class ItemListagem extends React.Component {
	render() {
		const { property } = this.props
		return property && (
			<div className={styles["container"]}>
				<div className={styles["header"]}>
					<div className={styles["tipo"]}>{property.type.type}</div>
					<div className={styles["rua"]}>{property.address.street + " ," + property.address.number}</div>
					<div className={styles["bairro"]}>{property.address.district}</div>
					<div className={styles["bairro"]}>{property.description}</div>
					{property.builtin_cabinet && <div className={styles["bairro"]}>Possui armário</div>}
					{property.property_extras && property.property_extras.lobby_24h && <div className={styles["bairro"]}>Possui Portaria 24h</div>}
					{property.qt_lvrooms && <div className={styles["bairro"]}>Salas de Estar: {property.qt_lvrooms}</div>}
					{property.property_extras && property.property_extras.qt_dnrooms && <div className={styles["bairro"]}>Salas de Jantar: {property.property_extras.qt_dnrooms}</div>}
					{property.property_extras && property.property_extras.floor && <div className={styles["bairro"]}>Andar: {property.property_extras.floor}</div>}

					<div className={styles["informacoes"]}>
						<div className={styles["info-detalhe"]}>
							<div className={styles["icones"]}>
								<FaRulerHorizontal />
							</div>
							<div>{property.area}</div>
						</div>
						<div className={styles["info-detalhe"]}>
							<div className={styles["icones"]}>
								<FaBed />
							</div>
							<div>{`S:${property.qt_suites} Q:${property.qt_rooms}`}</div>
						</div>
						<div className={styles["info-detalhe"]}>
							<div className={styles["icones"]}>
								<FaCar />
							</div>
							<div>{property.qt_vacancies}</div>
						</div>
					</div>
				</div>
				<div className={styles["footer"]}>
					{property.property_extras && property.property_extras.condo_value && <div className={styles["precos"]}>{`C: R$ ${property.property_extras.condo_value}`}</div>}
					<div className={styles["precos"]}>{`A: R$ ${property.rent}`}</div>
					<div className={styles["iconesAcao"]}>
						<div className={styles["button"]} onClick={this.delete}>
							<FaTrash />
						</div>
						<div className={styles["button"]} onClick={this.update}>
							<FaEdit />
						</div>
					</div>
				</div>
			</div>
		)
	}

	delete = () => {
		const { onDelete, property } = this.props
		onDelete(property.id)
	}

	update = () => {
		const { onUpdate, property } = this.props
		onUpdate(property)
	}
}

export default ItemListagem
