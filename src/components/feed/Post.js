import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import InputOptions from './InputOptions'
import './Post.css'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAlt';
import CommentOutlinedIcon from '@material-ui/icons/Comment';
import ShareOutlinedIcon from '@material-ui/icons/Share';
import SendOutlinedIcon from '@material-ui/icons/Send';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) =>{
    return (
        <div ref={ref} className="post">
            <div className="post__header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
                
            </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color=""/>
                <InputOptions Icon={CommentOutlinedIcon} title="Comment" color=""/>
                <InputOptions Icon={ShareOutlinedIcon} title="Share" color=""/>
                <InputOptions Icon={SendOutlinedIcon} title="Send" color=""/>
            </div>

        </div>
    )
})

export default Post
