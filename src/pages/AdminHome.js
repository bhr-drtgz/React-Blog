import React, { useEffect } from 'react'
import Header from '../companent/Header'
import SubMenü from '../companent/SubMenü'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ListBlogs from '../companent/ListBlogs'

const AdminHome = () => {
    const { loginState } = useSelector((state) => state)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loginState.success) navigate("/login")
    }, [loginState])

    return (
        <div>
            <Header />
            <SubMenü isAdmin={loginState?.user?.role === "admin" ? true : false} />
            <ListBlogs />
        </div>
    )
}

export default AdminHome