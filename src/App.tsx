import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from './components/Nav/Nav';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dilogs/Dialogs";


export type navPropsType = {
    id: number
    name: string
    link: string
}

export type navNamePropsType = {
    navName: navPropsType[]
}

export type DialPropsType = {
    id: number
    name: string
}

export type MessPropsType = {
    id: number
    message: string
}

export type DialogsPropsType = {
    dialogsData: DialPropsType[]
    messagesData: MessPropsType[]
}

export type PostPropsType = {
    id: number
    message: string
    mess: number
}

export type PostsPropsType = {
    posts: PostPropsType[]
}

export type AppPropsType = {
    headerPage: string
    navPage: navNamePropsType
    dialogsPages: DialogsPropsType
    profilePage:PostsPropsType
}

export type AppState = {
    state: AppPropsType
}

function App(props:AppState) {

    return (
            <div className='app-wrapper'>
                <Header head={props.state.headerPage}/>
                <Nav nav={props.state.navPage.navName}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile myPosts={props.state.profilePage.posts}/>}/>
                    <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogsPages.dialogsData} messages={props.state.dialogsPages.messagesData}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
