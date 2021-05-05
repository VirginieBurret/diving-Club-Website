import './post.scss';
import {MoreVert} from '@material-ui/icons';
function Post() {
    return (
        <div className="post">
           <div className="postWrapper">

               <div className="postTop">
                 <div className="postTopLeft">
                   <img className="postProfileImg" src="/assets/person/cat.jpg" alt="" />
                   <span className="postUsername">Virginie Burret</span>
                   <span className="postdate">Il y a 5 minutes</span>
                 </div>

                 <div className="postTopRight">
                    <MoreVert/>
                 </div>

               </div>

               <div className="postCenter">
                 <span className="postText">salut les noobies</span>
                 <img className="postImg" src="/assets/post/diving.jpg" alt=""/>
               </div>

               <div className="postBottom">
                 <div className="postBottomLeft">
                 <img className="likeIcon" src="/assets/heart.png" alt="" />
                 <img className="likeIcon" src="/assets/like.png" alt="" />
                 <span className="postLikecounter">32</span>
                 </div>

                 <div className="postBottomRight">
                     <span className="postCommentText">
                         9 commentaires
                     </span>
                 </div>
               </div>
           </div>
        </div>
    )
}

export default Post
