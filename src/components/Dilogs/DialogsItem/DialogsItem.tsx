import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';
import {DialPropsType} from "../../../App";






const DialogItem = (props:DialPropsType) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
    </div>
}






export default DialogItem;