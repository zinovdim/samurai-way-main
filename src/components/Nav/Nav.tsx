import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';
import {navPropsType} from "../../redux/state";


type NavPagePropsType={
    nav: navPropsType[]
}


export const Nav = (props: NavPagePropsType) => {

    return (
        <nav className='Nav'>
        {
            props.nav.map(el => {

                    return (
                            <div className='item'>
                                <NavLink to={el.link} className={({isActive}) => (isActive ? "active" : "item")}>{el.name}</NavLink>
                            </div>
                    )
                }
            )
        }
        </nav>

        // <nav className='Nav'>
        //    <div className='item'>
        //        <NavLink to='/profile' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[0].name}</NavLink>
        //    </div>
        //     <div className='item'>
        //         <NavLink to='/dialogs'  className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[1].name}</NavLink>
        //     </div>
        //     <div className='item'>
        //         <NavLink to='/news' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[2].name}</NavLink>
        //     </div>
        //     <div className='item'>
        //         <NavLink to='/music' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[3].name}</NavLink>
        //     </div>
        //     <div className='item'>
        //         <NavLink to='/settings' className={({ isActive }) =>(isActive ? "active" : "item")}>{props.nav[4].name}</NavLink>
        //     </div>
        //     </nav>
    )
}