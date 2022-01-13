import './Sidebar.css';
import logo from '../../assets/logo.jpeg';

const Sidebar = ({ sidebarOpen, sidebarClose }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""}>
      <div className='sidebar__tutle'>
        <div className='sidebar__'>

        </div>
      </div>
    </div>
  );
}