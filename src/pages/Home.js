import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {
  const { loginState } = useSelector(state => state)
  console.log(loginState)
  return (

    <div>
      {
        loginState.success === false && (
          <Link to={"/login"}>Login</Link>
        )
      }
      <h1>ANASAYFA</h1>
    </div>
  )
}

export default Home