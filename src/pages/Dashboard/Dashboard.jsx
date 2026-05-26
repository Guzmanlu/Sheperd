import './Dashboard.css'

import Sidebar from '../../components/Sidebars/Sidebar'

function Dashboard() {

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENIDO */}

      <div className="dashboard-content">

        {/* NAVBAR */}

        <div className="topbar">

          <div>

            <h1>
              Dashboard
            </h1>

            <p>
              Bienvenido al sistema médico
            </p>

          </div>

          <div className="profile">

            <div className="profile-circle">
              D
            </div>

            <span>
              Dr. Martínez
            </span>

          </div>

        </div>

        {/* CARDS */}

        <div className="cards-container">

          <div className="stat-card">

            <h3>
              28
            </h3>

            <p>
              Citas Hoy
            </p>

          </div>

          <div className="stat-card">

            <h3>
              14
            </h3>

            <p>
              Pacientes Atendidos
            </p>

          </div>

          <div className="stat-card">

            <h3>
              $12,500
            </h3>

            <p>
              Ingresos
            </p>

          </div>

          <div className="stat-card">

            <h3>
              5
            </h3>

            <p>
              Pendientes
            </p>

          </div>

        </div>

        {/* TABLA */}

        <div className="appointments-section">

          <h2>
            Próximas citas
          </h2>

          <table className="appointments-table">

            <thead>

              <tr>

                <th>Paciente</th>
                <th>Doctor</th>
                <th>Hora</th>
                <th>Estado</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Juan Pérez</td>
                <td>Dr. Martínez</td>
                <td>10:00 AM</td>
                <td>
                  <span className="status active-status">
                    Confirmada
                  </span>
                </td>

              </tr>

              <tr>

                <td>María López</td>
                <td>Dra. Gómez</td>
                <td>11:30 AM</td>
                <td>
                  <span className="status pending-status">
                    Pendiente
                  </span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}

export default Dashboard