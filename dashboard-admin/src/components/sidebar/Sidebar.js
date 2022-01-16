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
        // eslint-disable-next-line no-undef
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
        <div className='sidebar__link'>
          <i className='fa fa-building'></i> 
          <a href='#'>Lojas</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-archive'></i> 
          <a href='#'>Produtos </a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-bars'></i> 
          <a href='#'>Categorias</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-cutlery'></i> 
          <a href='#'>Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className='sidebar__link'>
          <i className='fa fa-mael'></i> 
          <a href='#'>Administradores</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-user-circle'></i> 
          <a href='#'>Usuários</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-money'></i> 
          <a href='#'>Pagamenos e custos</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-tasks'></i> 
          <a href='#'>A Plataforma</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-file-text'></i> 
          <a href='#'>Politica de Privacidade</a>
        </div>
        <div className='sidebar__logout'>
          <i className='fa fa-power-off'></i> 
          <a href='#'>Logout</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;