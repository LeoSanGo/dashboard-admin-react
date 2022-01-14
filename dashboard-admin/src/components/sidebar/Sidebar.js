import './Sidebar.css';
import logo from '../../assets/logo.jpeg';

const Sidebar = ({ sidebarOpen, sidebarClose }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""}>
      <div className='sidebar__tutle'>
        <div className='sidebar__img'>
          <img src={logo} alt="Logo" />
          <h1>DASHBOARDS</h1>
        </div>

        <i 
        onClick={() => closeSidebar()}
        className='fa fa-times'
        id='sidebarIcon'
        aria-hidden="true"
        ></i>
      </div>
      <div className='sidebar__menu'>
        <div className='sidebar__link acitive_menu_link'>
          <i className='fa fa-minus-square'></i> 
          <a href='#'>Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className='sidebar__link'>
          <i className='fa fa-tachometer'></i> 
          <a href='#'>Área administrativa</a>
        </div>
        
      </div>
    </div>
  );
}