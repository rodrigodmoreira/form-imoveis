import React from 'react'

import { FaTrash, FaEdit, FaUserEdit} from 'react-icons/fa';

import styles from './ItemListagem.module.css'


const ItemListagem = (props) => {
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <div className={styles["tipo"]}>
                    {props.tipo}
                </div>
                <div className={styles["rua"]}>
                    {props.rua}
                </div>
                <div className={styles["bairro"]}>
                    {props.bairro}
                </div>

                <div className={styles["informacoes"]}>
                    {props.metrosQuadrados}
                    {props.numeroQuartos}
                </div>
            </div>
            <div className={styles["footer"]}>
                <div className={styles["precos"]}>
                    Preco x
                </div>
                <div className={styles["iconesAcao"]}>
                    <div className={styles["button"]}>
                        <FaTrash /> 
                    </div>
                    <div className={styles["button"]}>
                        <FaEdit />
                    </div>
                </div>

                
            </div>
        </div>
    );
}

export default ItemListagem;