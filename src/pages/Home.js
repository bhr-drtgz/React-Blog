import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../companent/Header'
import CategoriesSection from '../companent/CategoriesSection'


const Home = () => {
  const { loginState, blogsState } = useSelector(state => state)
  console.log(loginState)
  return (

    <div>
      <Header />
      <main className='mainContainer'>
        <CategoriesSection />
        <section className="rightSide">
          {
            blogsState.blogs.map(blog => {
              return (
                <div key={blog.id} class="cardContainer">
                  <div class="cardImageContainer">
                    <img src={blog.img} alt="" />
                  </div>
                  <h3 class="blogTitle">{blog.title}</h3>
                  <p class="blogSummary">
                    {blog.description}
                  </p>
                  <div class="card-btn-container">
                    <a
                      Link to={`/blog/${blog?.id}`} class="card-btn">Devamını Oku</a>
                  </div>
                </div>
              )
            })
          }
        </section>
      </main>
    </div>
  )
}

export default Home