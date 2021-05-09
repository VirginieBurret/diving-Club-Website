import './sideBar.scss';
import { RssFeed,Event,School,WorkOutline, HelpOutline,Bookmark,PlayCircleFilledOutlined, Group, Video,Chat} from '@material-ui/icons';
import CloseFriend from '../CloseFriend/CloseFriend';
import {Users} from '../../data'
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
              {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
              </ul>
          </div>
       </div>
    )
}

export default SideBar;
