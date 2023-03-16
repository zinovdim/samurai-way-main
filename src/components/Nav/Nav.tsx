import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Nav.css';



type PropsType = {
    id:number
    name: string
}

type NavPropsType = {
    nav: PropsType[]
}

export const Nav = (props:NavPropsType) => {


    return (

        <nav className='Nav'>
           <div className='item'>
               <NavLink to='/profile' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[0].name}</NavLink>
           </div>
            <div className='item'>
                <NavLink to='/dialogs'  className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[1].name}</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/news' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[2].name}</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/music' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[3].name}</NavLink>
            </div>
            <div className='item'>
                <NavLink to='/settings' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[4].name}</NavLink>
            </div>
            </nav>
    )
}