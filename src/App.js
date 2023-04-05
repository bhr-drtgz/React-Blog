import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AdminHome from "./pages/AdminHome";
import Login from "./pages/Login";
import Error from "./pages/Error";
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";

import "./assest/css/about.css";
import "./assest/css/blogDetail.css";
import "./assest/css/header.css";
import "./assest/css/main.css";


import api from "./api/api"
import urls from "./api/urls"

import actionType from "./redux/actions/actionTypes"
import { useDispatch, useSelector } from "react-redux";


function App() {
  const { blogsState, categoriesState, usersState } = useSelector(state => state)
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

    const loginStateFromLocalstorage = JSON.parse(
      localStorage.getItem("loginState")
    )
    if (loginStateFromLocalstorage === null) {
      localStorage.setItem(
        "loginState",
        JSON.stringify({
          pending: false,
          success: false,
          error: false,
          errorMessage: "",
          user: null
        })
      )
    } else {
      if (loginStateFromLocalstorage.success) {
        dispatch({ type: actionType.loginActions.LOGIN_SUCCESS, payload: loginStateFromLocalstorage.user, })
      }
    }

  }, [])

  /* if (!blogsState.success || categoriesState.success || usersState.success)
     return null;*/

  if (blogsState.error || categoriesState.error || usersState.error)
    return <Error />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/add-blog" element={<AddBlog />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
