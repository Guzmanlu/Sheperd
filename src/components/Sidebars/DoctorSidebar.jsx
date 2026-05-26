import './Sidebar.css'

import logo from '../../assets/images/logo.png'

function DoctorSidebar() {

  return (

    <div className="sidebar">

      {/* LOGO */}

      <div className="sidebar-header">

        <img
          src={logo}
          alt="Centro Médico San Aurora"
          className="sidebar-logo"
        />

        <div>

          <h2 className="sidebar-title">
            San Aurora
          </h2>

          <p className="sidebar-subtitle">
            Panel Médico
          </p>

        </div>

      </div>

      {/* MENU */}

      <div className="sidebar-menu">

        <button className="menu-item active">

          Dashboard

        </button>

        <button className="menu-item">

          Mis Citas

        </button>

        <button className="menu-item">

          Historial Clínico

        </button>

        <button className="menu-item">

          Pacientes

        </button>

        <button className="menu-item">

          Consultas

        </button>

      </div>

      {/* FOOTER */}

      <div className="sidebar-footer">

        <button className="logout-btn">

          Cerrar Sesión

        </button>

      </div>

    </div>

  )
}

export default DoctorSidebar