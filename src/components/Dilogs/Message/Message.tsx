import React from 'react';
import s from './../Dialogs.module.css';
import {MessPropsType} from "../../../App";


const Message = (props:MessPropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}



export default Message;