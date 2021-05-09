import './profile.scss'
import TopBar from '../../Components/TopBar/TopBar';
import Sidebar from '../../Components/SideBar/SideBar';
import Feed from '../../Components/Feed/Feed';
import RightBar from '../../Components/RightBar/RightBar';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser]= useState({})

  useEffect(() => {
    const fetchUser = async () => {
        const res = await axios.get(`${URL}users?username=jean`)
        //console.log(res)
        setUser(res.data)
    };
   fetchUser();
}, []) 
console.log('USER',user)
    return (
       
            <>
           <TopBar/>
         <div className="profile">
               <Sidebar/>
               <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">
                     <img className="profileCoverImg" src={`${PF}post/diving.jpg`} alt=""/>
                     <img className="profileUserImg" src={`${PF}person/cat.jpg`} alt=""/>
                   </div>
                 
                     <div className="profileInfo">
                         <h4 className="profileInfoName">{user.username}</h4>
                         <p className="profileDescription">Salut les noob!!!!!</p>
                     </div>
              </div>

            <div className="profileRightBottom">
               <Feed username="jean"/>
               <RightBar user={user}/>
            </div>
        </div>
   
</div>
           
   </>
    )
}

export default Profile
