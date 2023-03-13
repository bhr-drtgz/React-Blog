import React, { useEffect } from 'react'
import Header from '../companent/Header'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminHome = () => {
    const { loginState } = useSelector(state => state)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loginState.success) navigate("/login")
    }, [loginState])

    return (
        <div>
            <Header />
            AdminHome
        </div>
    )
}

export default AdminHome