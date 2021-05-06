import './profile.scss'
import TopBar from '../../Components/TopBar/TopBar';
import Sidebar from '../../Components/SideBar/SideBar';
import Feed from '../../Components/Feed/Feed';
import RightBar from '../../Components/RightBar/RightBar';

const Profile = () => {
    return (
       
            <>
           <TopBar/>
         <div className="profile">
               <Sidebar/>
               <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">
                     <img className="profileCoverImg" src="/assets/post/diving.jpg" alt=""/>
                     <img className="profileUserImg" src="/assets/person/cat.jpg" alt=""/>
                   </div>
                 
                     <div className="profileInfo">
                         <h4 className="profileInfoName">Virginie Burret</h4>
                         <p className="profileDescription">Salut les noob!!!!!</p>
                     </div>
              </div>

            <div className="profileRightBottom">
               <Feed/>
               <RightBar profile/>
            </div>
        </div>
   
</div>
           
   </>
    )
}

export default Profile
