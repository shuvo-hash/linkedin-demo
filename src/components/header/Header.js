import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Logo from "../../img/linkedin.png"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

function Header() {
    

    const dispatch = useDispatch();

    const logoutApp = () =>{
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className="header">
            <div className="header__left">
            <img src={Logo} alt=""/>
            <div className="header__searchBar">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
            </div>

            </div>
            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={TextsmsIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsActiveIcon} title="Notification"/>
            <HeaderOption avatar={true} title="me" onClick={logoutApp}/>
            </div>
            </div>
    )
}

export default Header
