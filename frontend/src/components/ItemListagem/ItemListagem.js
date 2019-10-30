import React from 'react'

import styles from './ItemListagem.module.css'
import { IconContext } from "react-icons";

const ItemListagem = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                Ola
            </div>
            <div className={styles["footer"]}>
 
                <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                
                </IconContext.Provider>
            </div>
        </div>
    );
}

export default ItemListagem;