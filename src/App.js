import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

import api from "./api/api"
import urls from "./api/urls"

import actionType from "./redux/actions/actionTypes"
import { useDispatch, useSelector } from "react-redux";


function App() {
  const { blogsState, categoriesState, userState } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch({ type: actionType.blogActions.GET_BLOGS_START })
    api.get(urls.blogs)
      .then(res => dispatch({ type: actionType.blogActions.GET_BLOGS_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: actionType.blogActions.GET_BLOGS_FAIL, payload: "Blogları Çekerken Bir Hata Oluştu" }))

    dispatch({ type: actionType.categoryActions.GET_CATEGORIES_START })
    api.get(urls.categories)
      .then(res => dispatch({ type: actionType.categoryActions.GET_CATEGORIES_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: actionType.categoryActions.GET_CATEGORIES_FAIL, payload: "Categorileri Çekerken Bir Hata Oluştu" }))

    dispatch({ type: actionType.userActions.GET_USERS_START })
    api.get(urls.users)
      .then(res => dispatch({ type: actionType.userActions.GET_USERS_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: actionType.userActions.GET_USERS_FAIL, payload: "Userleri Çekilirken Bir Hata Oluştu" }))

  }, [])

  /*if (!blogsState.success || categoriesState.success || userState.success)
    return null;*/

  /*if (blogsState.error || categoriesState.error || userState.error) return*/

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
