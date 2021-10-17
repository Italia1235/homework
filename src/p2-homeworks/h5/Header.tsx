import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import s from './Header.module.css'
function Header() {

    return (


        <div className={s.navbar}>
    <NavLink className={`${s.navlink} ${s.active}`} to={"/pre-junior"}>  <span>Prejunior</span> </NavLink>
            <NavLink className={`${s.navlink} ${s.active}`} to={"/junior"}>  <span>Junior</span> </NavLink>
            <NavLink className={`${s.navlink} ${s.active}`} to={"/junior+"}>  <span>Junior+</span> </NavLink>
        </div>
    )
}

export default Header
