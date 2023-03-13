import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import actionTypes from './../redux/actions/actionTypes';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { usersState, loginState } = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    useEffect(() => {
        if (loginState.success)
            navigate("/")
    }, [])

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(form)
        console.log(usersState)
        const hasUsers = usersState.users.find(item => item.username === form.username)
        console.log(hasUsers)
        if (hasUsers === undefined) {
            alert("Böyle Bir Kullanıcı Bulunamadı!!")
            return
        }
        if (hasUsers.password !== form.password) {
            alert("Şifreniz Hatalı !!!")
            return

        }
        dispatch({ type: actionTypes.loginActions.LOGIN_SUCCESS, payload: { username: hasUsers.username, role: hasUsers.role }, })
        const successLoginState = {
            pending: false,
            success: true,
            error: false,
            errorMessage: "",
            user: { username: hasUsers.username, role: hasUsers.role }
        }
        localStorage.setItem("loginState", JSON.stringify(successLoginState))
        navigate("/")
    }

    return (
        <div className='container my-5'>
            <h1 className='text-center'>Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control value={form.username} onChange={(event) => setForm({ ...form, username: event.target.value })} type="text" placeholder="Enter UserName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} type="password" placeholder="Password" />
                </Form.Group>
                <div className='my-5 d-flex justify-content-center'>
                    <Button className='w-50' variant="primary" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
        </div >
    )
}

export default Login