import React,{useState,useEffect} from 'react'
import './Post.css'
import {db} from '../firebase'
import Avatar from '@material-ui/core/Avatar'

function Post({postId,imageUrl,username,caption}) {
    const [comments,setComments] = useState([]);
    /*This part is for adding comments in a future
    useEffect(() => {
        let unsubscribe;
        if(postId) {
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .onSnapshot((snapshot)=> {
                setComments(snapshot.docs.map((doc)=>doc.data()))
            })
        }
        return () => {
            unsubscribe();
        }
    }, [postId])
    */

    return (
        <div className='post'>
            <div className="post__header">
                <Avatar
                className="post__avatar"
                alt={username}
                src={require="b"}
                />
                <h3>{username}</h3>
            </div>
            <img className='post__image' src={imageUrl}/>
            <h4 className="post__text">
                <strong>{username} </strong> 
                {caption}
            </h4>
        </div>
    )
}

export default Post
