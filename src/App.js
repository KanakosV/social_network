import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Sidebar} from './components/Sidebar/Sidebar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


export const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar sidebarRandomDialogs={props.state.sidebar.randomDialogs}/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path='/profile'
                           render={ () => <Profile state={props.state.profilePage} /> }/>
                </div>
            </div>
        </BrowserRouter>)
}

