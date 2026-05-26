import './Sidebar.css'

function Sidebar() {

  return (

    <div className="sidebar">

      <div className="sidebar-top">

        <h2 className="logo">
          SHEPERD
        </h2>

      </div>

      <div className="sidebar-menu">

        <button className="menu-item active">
          Dashboard
        </button>

        <button className="menu-item">
          Pacientes
        </button>

        <button className="menu-item">
          Citas
        </button>

        <button className="menu-item">
          Historial Clínico
        </button>

        <button className="menu-item">
          Pagos
        </button>

        <button className="menu-item">
          Reportes
        </button>

      </div>

    </div>

  )
}

export default Sidebar