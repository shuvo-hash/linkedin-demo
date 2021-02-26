import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './HeaderOption.css'

function HeaderOption({ avatar, title, Icon, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className="headerOption">
            { Icon && <Icon className="headerOptionIcon" />}
            { avatar && <Avatar className="headerOptionIcon" src={user?.photoUrl}>{user?.displayName[0]}</Avatar>}
            <h3 className="headerOptionTitle">{title}</h3>
        </div>
    )
}

export default HeaderOption
