import React from 'react';
import { MessPropsType } from '../Dialogs';
import s from './../Dialogs.module.css';


const Message = (props:MessPropsType) => {
    return <div className={s.dialog}>{props.message}</div>
}



export default Message;