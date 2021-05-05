import './home.scss'
import TopBar from '../../Components/TopBar/TopBar';
import Sidebar from '../../Components/SideBar/SideBar';
import Feed from '../../Components/Feed/Feed';
import RightBar from '../../Components/RightBar/RightBar';

const Home = () => {
    return (
          <>
           <TopBar/>
           <div className="homeContainer">
               <Sidebar/>
               <Feed/>
               <RightBar/>
           </div>
           
       </>

    )
}

export default Home
