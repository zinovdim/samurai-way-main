import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from './components/Nav/Nav';
import {Profile} from "./components/Profile/Profile";



function App() {
    let ava = 'https://img.freepik.com/free-psd/logo-mockup-on-grey-wall_35913-2122.jpg?w=740&t=st=1664805418~exp=1664806018~hmac=f10f6fc8146cdcb3aa59776dd32732d40674037fa0519902e7de616960ec568c'

    const navName = [
        {id: 1, name: 'Profile'},
        {id: 1, name: 'Messages'},
        {id: 1, name: 'News'},
        {id: 1, name: 'Music'},
        {id: 1, name: 'Settings'}
    ]


    return (
            <div className='app-wrapper'>
                <Header avatar={ava}/>
                <Nav nav={navName}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile/>}/>
                    {/*<Route path='/dialogs' element={<Dialogs/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
