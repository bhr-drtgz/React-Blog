import React from 'react'
import { useSelector } from 'react-redux'

const Home=()=> {
  const appState=useSelector(state=>state)
  console.log(appState)
  return (
    <div>Home</div>
  )
}

export default Home