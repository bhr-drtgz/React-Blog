import React from 'react'

import { Link } from 'react-router-dom'
import styles from "../assest/css/subMenu.module.css"

function SubMenü({ isAdmin }) {
    return (
        <div className={styles.subMenuWrapper}>
            <Link to={"/admin"}>Blog İşlemleri</Link>
            {
                isAdmin  && (
                    <Link to={"/admin/category-operations"}>Kategori İşlemleri</Link>
                )
            }
        </div>
    )
}

export default SubMenü