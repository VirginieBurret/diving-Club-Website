import './rightBar.scss'
import Online from '../Online/Online';
import {Users} from '../../data';


const RightBar = ({profile}) => {

    const HomeRightBar = () => {
        return (
       <>
           <div className="birthdayContainer">
              <img className="birthdayImg" src="/assets/gift.png" alt="" />
              <span className="birthdayText">
                  <b>Pauline enguix</b> et <b>3 autres amis</b>
                  </span>
              </div>

              <h4 className="rightBarTitle">Membre connectés</h4>
              <ul className="rightBarFriendList">
                  {Users.map(u =>(
                      <Online key={u.id} user={u}/>
                  ))}
              </ul>
       </>
       )
    }

    const ProfileRightBar = () => {
        return(
            <>

            <h4 className="rightBarTitle">Informations du profil</h4>
            <div className="rightBarInfo">
                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">Habite à :</span>
                    <span className="rightBarInfoValue">Los Angeles</span>
                </div>

                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">De :</span>
                    <span className="rightBarInfoValue">New-York</span>
                </div>

                <div className="rightBarInfoItem">
                    <span className="rightBarInfoKey">Statut :</span>
                    <span className="rightBarInfoValue">Niveau 1</span>
                </div>

                
            </div>

            <h4 className="rightBarTitle">Amis</h4>
            <div className="rightBarFollowings">
                <div className="rightBarFollowing">
                  <img className="rightBarFollowingImg" src="/assets/person/cat.jpg" alt="" />
                  <span className="rightbarFollowingName">Monicca Belluci</span>
                </div>

                <div className="rightBarFollowing">
                  <img className="rightBarFollowingImg" src="/assets/person/cat.jpg" alt="" />
                  <span className="rightbarFollowingName">Monicca Belluci</span>
                </div>

                <div className="rightBarFollowing">
                  <img className="rightBarFollowingImg" src="/assets/person/cat.jpg" alt="" />
                  <span className="rightbarFollowingName">Monicca Belluci</span>
                </div>

                <div className="rightBarFollowing">
                  <img className="rightBarFollowingImg" src="/assets/person/cat.jpg" alt="" />
                  <span className="rightbarFollowingName">Monicca Belluci</span>
                </div>

                <div className="rightBarFollowing">
                  <img className="rightBarFollowingImg" src="/assets/person/cat.jpg" alt="" />
                  <span className="rightbarFollowingName">Monicca Belluci</span>
                </div>
            </div>
            </>
        )
    }
    return (
       <div className="rightBar">
          <div className="rightBarWrapper">
             {profile ? <ProfileRightBar /> : <HomeRightBar/>}
          </div>
        
       </div>
    )
}

export default RightBar;
