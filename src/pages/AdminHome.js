import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminHome = () => {
    const { loginState } = useSelector(state => state)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loginState.success) navigate("/login")
    }, [])

    return (
        <div>AdminHome</div>
    )
}

export default AdminHome