import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../companent/Header'
import CategoriesSection from '../companent/CategoriesSection'


const Home = () => {
  const { loginState } = useSelector(state => state)
  console.log(loginState)
  return (

    <div>
      <Header />
      <main className='mainContainer'>
        <CategoriesSection />
        <section className="rightSide">

        </section>
      </main>
    </div>
  )
}

export default Home