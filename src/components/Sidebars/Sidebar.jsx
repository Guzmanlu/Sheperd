import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom'; // ← Importante
import logo from '../../assets/logo/logo.png';

function Sidebar() {
  const location = useLocation(); // Para saber en qué página estás

  return (
    <div className="sidebar">
      {/* LOGO */}
      <div className="sidebar-header">
        <img
          src={logo}
          alt="Centro Médico San Aurora"
          className="sidebar-logo"
        />
      </div>

      {/* MENU */}
      <div className="sidebar-menu">
        <Link 
          to="/dashboard" 
          className={`sidebar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
        >
          Dashboard
        </Link>

        <Link 
          to="/patients" 
          className={`sidebar-item ${location.pathname === '/patients' ? 'active' : ''}`}
        >
          Pacientes
        </Link>

        <Link 
          to="/appointments" 
          className={`sidebar-item ${location.pathname === '/appointments' ? 'active' : ''}`}
        >
          Citas
        </Link>

        <Link 
          to="/history" 
          className={`sidebar-item ${location.pathname === '/history' ? 'active' : ''}`}
        >
          Historial Clínico
        </Link>

        <Link 
          to="/payments" 
          className={`sidebar-item ${location.pathname === '/payments' ? 'active' : ''}`}
        >
          Pagos
        </Link>

        <Link 
          to="/reports" 
          className={`sidebar-item ${location.pathname === '/reports' ? 'active' : ''}`}
        >
          Reportes
        </Link>

        <Link 
          to="/messages" 
          className={`sidebar-item ${location.pathname === '/messages' ? 'active' : ''}`}
        >
          Mensajes
        </Link>

        <Link 
          to="/settings" 
          className={`sidebar-item ${location.pathname === '/settings' ? 'active' : ''}`}
        >
          Configuración
        </Link>
      </div>

      {/* USUARIO */}
      <div className="sidebar-user">
        <div className="user-avatar">
          <img
            src="https://i.pravatar.cc/100"
            alt=""
          />
        </div>
        <div>
          <h4>(nombre usuario)</h4>
          <p>Recepcionista</p>
        </div>
      </div>

      {/* LOGOUT */}
      <button className="logout-button">
        Cerrar sesión
      </button>
    </div>
  );
}

export default Sidebar;