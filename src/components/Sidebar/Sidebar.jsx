import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import {Navbar} from "./Navbar/Navbar";
import {SidebarWidget} from "./SidebarWidget/SidebarWidget";

export const Sidebar = (props) => {

    return (
        <div className={s.nav}>
            <Navbar/>
            <SidebarWidget sidebarRandomDialogs={props}/>
        </div>
    )
}
