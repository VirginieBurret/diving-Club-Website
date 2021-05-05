import './sideBar.scss';
import { RssFeed,Event,School,WorkOutline, HelpOutline,Bookmark,PlayCircleFilledOutlined, Group, Video,Chat} from '@material-ui/icons';

function SideBar() {
    return (
       <div className="sidebar">
          <div className="sidebarWrapper">
              <ul className="sidebarlist">
                  <li className="sidebarListItem">
                     <RssFeed className="sidebarIcon"/>
                     <span className="sidebarListItemText">Publications</span>
                  </li>
                  <li className="sidebarListItem">
                     <Chat className="sidebarIcon"/>
                     <span className="sidebarListItemText">Messages</span>
                  </li>
                  <li className="sidebarListItem">
                     <PlayCircleFilledOutlined className="sidebarIcon"/>
                     <span className="sidebarListItemText">Vidéos</span>
                  </li>
                  <li className="sidebarListItem">
                     <Group className="sidebarIcon"/>
                     <span className="sidebarListItemText">Groupes</span>
                  </li>
                  <li className="sidebarListItem">
                     <Bookmark className="sidebarIcon"/>
                     <span className="sidebarListItemText">Bookmarks</span>
                  </li>
                  <li className="sidebarListItem">
                     <HelpOutline className="sidebarIcon"/>
                     <span className="sidebarListItemText">Questions</span>
                  </li>
                  
                  <li className="sidebarListItem">
                     <Event className="sidebarIcon"/>
                     <span className="sidebarListItemText">Evénements</span>
                  </li>
                 
              </ul>
              <button className="sidebarButton">Voir plus</button>
              <hr className="sidebarHr"/>

              <ul className="sidebarFriendList">
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
                  <li className="sidebarFriend">
                      <img src="/assets/person/cat.jpg" alt="" className="sidebarFriendImg"/>
                      <span className="sidebarFriendName">Virginie Burret</span>
                  </li>
              </ul>
          </div>
       </div>
    )
}

export default SideBar;
