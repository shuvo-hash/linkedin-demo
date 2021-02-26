import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import ViewDayIcon from '@material-ui/icons/ViewDay';
import Post from './Post';
import { db } from '../../firebase';
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from "react-flip-move";

function Feed() {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('')

  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection('posts')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) =>{
      setPosts(snapshot.docs.map(doc=>(
        {
          id: doc.id,
          data: doc.data(),
          
        }
      )))
    })
  }, [])

  const sendPost = (e) =>{
    e.preventDefault();
    
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input, 
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    
  }

    return (
        <div className="feed">
        <div className="feed__inputContainer">
        <div className="feed__input">
        <CreateIcon className="feed__icon"/>
        <form>
           <input type="text" value={input} onChange={e=> setInput(e.target.value)}/>
           <button onClick={sendPost} type="submit">Publish</button>
         </form>
       </div>
       <div className="feed__inputOption">
            <InputOptions Icon={PhotoIcon} title="Photo" color='#70B5F9'/>
            <InputOptions Icon={YouTubeIcon} title="Video" color='#E7A33E'/>
            <InputOptions Icon={EventIcon} title="Event" color='#C0CBCD'/>
            <InputOptions Icon={ViewDayIcon} title="Write article" color='#7FC15E'/>
            
       </div>
        </div>

        <FlipMove>
        {posts.map(({id, data: { name, description, message,photoUrl}})=>(
          <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
            
          />
        ))}

        </FlipMove>

       
        
         
        </div>
        
    )
}

export default Feed
