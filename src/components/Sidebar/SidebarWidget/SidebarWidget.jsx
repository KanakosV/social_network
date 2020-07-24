import React from 'react';
import s from './SidebarWidget.module.css';
import {NavLink} from "react-router-dom";

export const SidebarWidget = (props) => {

    let sidebarWidgetDialogsArray = props.sidebarRandomDialogs.sidebarRandomDialogs.map(namePlusAvatarPlusId => (
        <div className={s.namePlusAvatar}>
            <div className={s.avatar}><img src={namePlusAvatarPlusId.avatar}/></div>
            <div>{namePlusAvatarPlusId.name}</div>
        </div>))


    return (

        <div className={s.sidebarWidget}>

            <span className={s.friendsWord}>friends</span>
            <div className={s.randomDialogWrapItem}>
                {sidebarWidgetDialogsArray}
            </div>

        </div>
    )
}
