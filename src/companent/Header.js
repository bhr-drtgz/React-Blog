import React, { useEffect } from 'react'

import "../assest/css/header.css"
import Logo from "../assest/image/LOGO.jpg"

import { useSelector, useDispatch } from 'react-redux'
import actionTypes from '../redux/actions/actionTypes'
import { Link } from 'react-router-dom'


const Header = () => {
    const dispatch = useDispatch()
    const { loginState } = useSelector((state) => state)

    useEffect(() => {
        const menuBtn = document.getElementById("hamburgerMenuBtn");
        const navBar = document.getElementById("navBar");

        menuBtn.addEventListener("click", () => {
            if (getComputedStyle(navBar, null).display === "none") {
                navBar.style.display = "block";
            } else {
                navBar.style.display = "none";
            }
        });

        return () => {
            menuBtn.removeEventListener("click", () => {
                if (getComputedStyle(navBar, null).display === "none") {
                    navBar.style.display = "block";
                } else {
                    navBar.style.display = "none";
                }
            });
        };
    }, []);

    return (
        <div>
            <header>
                <div id="hamburgerMenuBtn" className="menuIconContainer" >
                    <span>
                        <i className="fa-solid fa-bars"></i>
                    </span>
                </div>
                <div className="logoContainer">
                    <img src={Logo} alt="" />
                </div>
                <nav id="navBar">
                    <ul>
                        <li>
                            <Link to={"/"}>Anasayfa</Link>
                        </li>
                        <li>
                            <a href="./HTML/about.html">Hakkımda</a>
                        </li>
                        {
                            !loginState.success ?
                                (
                                    <li>
                                        <Link to={"/login"}>Login</Link>
                                    </li>

                                ) :
                                (
                                    <>
                                        <li>
                                            <Link to={"/admin"}>Admin Paneli</Link>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => {
                                                    dispatch({ type: actionTypes.loginActions.LOGOUT })
                                                }}
                                                className='btn btn-sm btn-success'>
                                                {loginState.user.username}-logout</button>
                                        </li>
                                    </>
                                )
                        }
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header