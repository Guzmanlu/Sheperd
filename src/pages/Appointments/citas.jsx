import './Citas.css'

import Sidebar from '../../components/Sidebars/Sidebar'

function Citas() {

  return (

    <div className="appointments-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENIDO */}

      <div className="appointments-content">

        {/* TOPBAR */}

        <div className="appointments-topbar">

          <div>

            <h1>
              Agenda de citas
            </h1>

            <p>
              Gestión de citas y horarios de los doctores.
            </p>

          </div>

          <div className="topbar-right">

            <button className="today-btn">
              Hoy
            </button>

            <button className="arrow-btn">
              ❮
            </button>

            <button className="arrow-btn">
              ❯
            </button>

            <button className="date-btn">
              19 – 25 de mayo de 2025
            </button>

            <button className="new-appointment-btn">
              + Nueva cita
            </button>

          </div>

        </div>

        {/* GRID PRINCIPAL */}

        <div className="calendar-grid">

          {/* CALENDARIO */}

          <div className="calendar-section">

            {/* FILTROS */}

            <div className="calendar-filters">

              <div className="filter-group">

                <label>
                  Vista:
                </label>

                <select>

                  <option>
                    Semana
                  </option>

                </select>

              </div>

              <div className="filter-group">

                <label>
                  Doctores:
                </label>

                <select>

                  <option>
                    Todos
                  </option>

                </select>

              </div>

            </div>

            {/* TABLA */}

            <div className="calendar-table">

              {/* HEADER */}

              <div className="calendar-header">

                <div className="time-column"></div>

                <div className="day-column active-day">
                  <span>Lun 19</span>
                  <p>Mayo</p>
                </div>

                <div className="day-column">
                  <span>Mar 20</span>
                  <p>Mayo</p>
                </div>

                <div className="day-column">
                  <span>Mié 21</span>
                  <p>Mayo</p>
                </div>

                <div className="day-column">
                  <span>Jue 22</span>
                  <p>Mayo</p>
                </div>

                <div className="day-column">
                  <span>Vie 23</span>
                  <p>Mayo</p>
                </div>

              </div>

              {/* HORARIOS */}

              <div className="calendar-body">

                <div className="time-slot">
                  08:00
                </div>

                <div className="appointment-card blue">

                  <h4>
                    (nombre paciente)
                  </h4>

                  <p>
                    Consulta general
                  </p>

                  <span>
                    Dr. (nombre doctor)
                  </span>

                </div>

                <div className="appointment-card green">

                  <h4>
                    (nombre paciente)
                  </h4>

                  <p>
                    Control médico
                  </p>

                  <span>
                    Dra. (nombre doctor)
                  </span>

                </div>

                <div className="appointment-card yellow">

                  <h4>
                    (nombre paciente)
                  </h4>

                  <p>
                    Revisión anual
                  </p>

                  <span>
                    Dr. (nombre doctor)
                  </span>

                </div>

                <div className="appointment-card purple">

                  <h4>
                    (nombre paciente)
                  </h4>

                  <p>
                    Seguimiento
                  </p>

                  <span>
                    Dra. (nombre doctor)
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* PANEL DERECHO */}

          <div className="right-panel">

            {/* CALENDARIO */}

            <div className="mini-calendar">

              <h2>
                Calendario
              </h2>

              <div className="mini-month">

                Mayo 2025

              </div>

              <div className="mini-days">

                <span>Lu</span>
                <span>Ma</span>
                <span>Mi</span>
                <span>Ju</span>
                <span>Vi</span>
                <span>Sá</span>
                <span>Do</span>

              </div>

            </div>

            {/* PROXIMAS CITAS */}

            <div className="upcoming-section">

              <div className="section-title">

                <h2>
                  Próximas citas
                </h2>

                <button>
                  Ver todas
                </button>

              </div>

              <div className="upcoming-card">

                <h4>
                  09:00
                </h4>

                <div>

                  <p>
                    (nombre paciente)
                  </p>

                  <span>
                    Consulta general
                  </span>

                </div>

              </div>

              <div className="upcoming-card">

                <h4>
                  10:30
                </h4>

                <div>

                  <p>
                    (nombre paciente)
                  </p>

                  <span>
                    Seguimiento
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Citas