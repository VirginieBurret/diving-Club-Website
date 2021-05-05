import './topbar.scss';
import {Search, Person, Chat, Notifications} from '@material-ui/icons';

const TopBar =() => {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">SEHVO</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Recherche" type="text" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Publications</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                      <Person/>
                      <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                      <Chat/>
                      <span className="topbarIconBadge">2</span>
                    </div>

                    <div className="topbarIconItem">
                      <Notifications/>
                      <span className="topbarIconBadge">150</span>
                    </div>
                </div>
                <img src="/assets/person/cat.jpg" alt="" className="topbarImg"/>
            </div>
           


        </div>
    )
}

export default TopBar;
