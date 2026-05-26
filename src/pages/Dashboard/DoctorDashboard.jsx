import './Dashboard.css'

import Sidebar from '../../components/Sidebars/Sidebar'

function Dashboard() {

  return (

    <div className="dashboard-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENIDO */}

      <div className="dashboard-content">

        {/* TOPBAR */}

        <div className="topbar">

          <div>

            <h1>
              Panel Médico
            </h1>

            <p>
              Bienvenido Dr. Martínez
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
              12
            </h3>

            <p>
              Pacientes Hoy
            </p>

          </div>

          <div className="stat-card">

            <h3>
              4
            </h3>

            <p>
              Consultas Pendientes
            </p>

          </div>

          <div className="stat-card">

            <h3>
              8
            </h3>

            <p>
              Recetas Emitidas
            </p>

          </div>

          <div className="stat-card">

            <h3>
              3:30 PM
            </h3>

            <p>
              Próxima Consulta
            </p>

          </div>

        </div>

        {/* CITAS */}

        <div className="appointments-section">

          <div className="section-header">

            <h2>
              Agenda del Día
            </h2>

            <button className="view-all-btn">
              Ver Todo
            </button>

          </div>

          <table className="appointments-table">

            <thead>

              <tr>

                <th>Paciente</th>
                <th>Motivo</th>
                <th>Hora</th>
                <th>Estado</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td>Juan Pérez</td>
                <td>Chequeo General</td>
                <td>10:00 AM</td>

                <td>
                  <span className="status active-status">
                    Confirmada
                  </span>
                </td>

              </tr>

              <tr>

                <td>María López</td>
                <td>Consulta Cardiológica</td>
                <td>11:30 AM</td>

                <td>
                  <span className="status pending-status">
                    Pendiente
                  </span>
                </td>

              </tr>

              <tr>

                <td>Carlos Ramírez</td>
                <td>Dolor Abdominal</td>
                <td>1:00 PM</td>

                <td>
                  <span className="status active-status">
                    En Espera
                  </span>
                </td>

              </tr>

            </tbody>

          </table>

        </div>

        {/* GRID INFERIOR */}

        <div className="bottom-grid">

          {/* PACIENTES */}

          <div className="patients-card">

            <h2>
              Pacientes Recientes
            </h2>

            <div className="patient-item">

              <div>

                <h4>
                  Ana Torres
                </h4>

                <p>
                  Última consulta: Hace 2 días
                </p>

              </div>

            </div>

            <div className="patient-item">

              <div>

                <h4>
                  Roberto Díaz
                </h4>

                <p>
                  Última consulta: Hoy
                </p>

              </div>

            </div>

            <div className="patient-item">

              <div>

                <h4>
                  Elena Vargas
                </h4>

                <p>
                  Última consulta: Hace 1 semana
                </p>

              </div>

            </div>

          </div>

          {/* ALERTAS */}

          <div className="alerts-card">

            <h2>
              Alertas Médicas
            </h2>

            <div className="alert warning">

              Estudio pendiente de Juan Pérez

            </div>

            <div className="alert danger">

              Paciente crítico en observación

            </div>

            <div className="alert info">

              3 recetas requieren firma

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Dashboard