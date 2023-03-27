import React from 'react';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';
import {DialPropsType, MessPropsType} from "../../redux/state";



type DialogsPagePropsType = {
    dialogs: DialPropsType[]
    messages: MessPropsType[]
}


export const Dialogs = (props:DialogsPagePropsType) => {



    let dialogsElements = props.dialogs.map (d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElements = props.messages.map (m => <Message message = {m.message} id = {m.id} />)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


