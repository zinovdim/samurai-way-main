import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Header} from "./components/Header/Header";
import {Nav} from './components/Nav/Nav';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dilogs/Dialogs";
import {v1} from 'uuid';
import {PostPropsType, StatePropsType} from "./redux/state";


type AppPropsType = {
    state: StatePropsType
}


function App(props: AppPropsType) {

    let [posts, setPosts] = useState<PostPropsType[]>([])

    const addMessage = (newTitle: string) => {
        // console.log(newTitle)
        let newMessage = {id: v1(), message: newTitle, mess: 0}
        setPosts([newMessage, ...posts])
    }

    return (
        <div className='app-wrapper'>
            <Header head={props.state.headerPage}/>
            <Nav nav={props.state.navPage.navName}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile'
                           element={<Profile addMessage={addMessage} myPosts={posts}/>}/>
                    <Route path='/dialogs' element={<Dialogs dialogs={props.state.dialogsPages.dialogsData}
                                                             messages={props.state.dialogsPages.messagesData}/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
