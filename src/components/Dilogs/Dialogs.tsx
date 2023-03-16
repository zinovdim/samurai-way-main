import React from 'react';




const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Billy' },
        { id: 3, name: 'Arny' },
        { id: 4, name: 'Mihalych' },
        { id: 5, name: 'Piter' },
        { id: 6, name: 'Bob' },
        { id: 7, name: 'Ivan' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello!' },
        { id: 3, message: 'How are your?' },
        { id: 4, message: 'Yo!' }
    ]

    let dialogsElements = dialogsData.map (d => <DialogItem name={d.name} id={d.id} />)
    let messagesElements = messagesData.map (m => <Message message = {m.message} id = {m.id} />)



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


export default Dialogs;