import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from './components/Nav/Nav';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dilogs/Dialogs";



function App() {
    let ava = 'https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?w=740&t=st=1664805418~exp=1664806018~hmac=f10f6fc8146cdcb3aa59776dd32732d40674037fa0519902e7de616960ec568c'

    const navName = [
        {id: 1,link: '/profile', name: 'Profile'},
        {id: 2, link: '/dialogs', name: 'Messages'},
        {id: 3, link: '/news', name: 'News'},
        {id: 4, link: '/music', name: 'Music'},
        {id: 5, link: '/settings',name: 'Settings'}
    ]

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


    return (
            <div className='app-wrapper'>
                <Header avatar={ava}/>
                <Nav nav={navName}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/dialogs' element={<Dialogs dialogs={dialogsData} messages={messagesData}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
