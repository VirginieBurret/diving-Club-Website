import './feed.scss';
import {useState, useEffect} from 'react'
import Share from '../Share/Share';
import Post from '../Post/Post';
import axios from 'axios';



const Feed = ({username}) => {
    const URL = process.env.REACT_APP_URL_API;
    const [posts,setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username 
            ?  await axios.get(`${URL}posts/profile/`+ username)
            : await axios.get(`${URL}posts/timeline/6091ba80b5032372ca8f2994`)
            //console.log(res)
            setPosts(res.data)
        };
       fetchPosts();
    }, [username])
    console.log('POSTS LIST', posts)
    
    return (
        <div className="feed">
            <div className="feedWrapper">
              <Share/>
             {
                 posts.map((post)=>(
                     <Post key={post._id} post={post}/>
                 ))
             }
            </div>
        </div>
    ) 
}

export default Feed;
