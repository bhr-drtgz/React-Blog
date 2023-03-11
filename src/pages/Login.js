import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Login = () => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleLogin = (event) => {
        event.preventDefault()
        console.log(form)
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