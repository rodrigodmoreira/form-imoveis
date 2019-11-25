import React from 'react'

import { FaPlus } from 'react-icons/fa'

import styles from './ItemAdicionar.module.css'

const ItemAdicionar = props => (
    <div className={styles["container"]} onClick={props.acao}>
        <div className={styles["icone"]}>
            <FaPlus height="20" />
        </div>
    </div>
)

export default ItemAdicionar
