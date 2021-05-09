import './post.scss';
import {MoreVert} from '@material-ui/icons';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {format} from 'timeago.js';
import {Link} from 'react-router-dom';


export default function Post({ post }) {
  const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user,setUser] = useState({})

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const URL = process.env.REACT_APP_URL_API;
 
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(`${URL}users?userId=${post.userId}`)
        //console.log(res)
        setUser(res.data)
    };
   fetchUser();
}, [post.userId]) // quand on change de user id il faut re render, quand on utilise qqch succeptible de changer dans un useffect on le met comme dependency dans le tableau vide
console.log('USER',user)

  return (

    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">


          <Link to = {`/profile/${user.username}`}>  
             <img
              className="postProfileImg"
              src={user.profilePicture || PF+"person/noAvatar.jpeg"}
              alt=""
             />
            
          </Link>


            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
            <img className="likeIcon"  src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}