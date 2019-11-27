import React from 'react'

import { FaTrash, FaEdit, FaBed, FaRulerHorizontal } from 'react-icons/fa'

import styles from './ItemListagem.module.css'

class ItemListagem extends React.Component {
	render() {
		const { property } = this.props
		return property && (
			<div className={styles["container"]}>
				<div className={styles["header"]}>
					<div className={styles["tipo"]}>{property.type.name}</div>
					<div className={styles["rua"]}>{property.address.street}</div>
					<div className={styles["bairro"]}>{property.address.district}</div>

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
							<div>{property.qt_rooms}</div>
						</div>
					</div>
				</div>
				<div className={styles["footer"]}>
					<div className={styles["precos"]}>{`R$ ${property.rent}`}</div>
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
