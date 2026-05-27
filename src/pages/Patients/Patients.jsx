import './Patients.css'

import Sidebar from '../../components/Sidebars/Sidebar'

function Patients() {

  return (

    <div className="patients-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENIDO */}

      <div className="patients-content">

        {/* TOPBAR */}

        <div className="patients-topbar">

          <div>

            <h1>
              Pacientes
            </h1>

            <p>
              Consulta, registra y administra la información de los pacientes.
            </p>

          </div>

          <div className="topbar-actions">

            <div className="search-box">

              <input
                type="text"
                placeholder="Buscar paciente..."
              />

            </div>

            <button className="new-patient-btn">

              + Nuevo paciente

            </button>

          </div>

        </div>

        {/* CONTENIDO PRINCIPAL */}

        <div className="patients-grid">

          {/* TABLA */}

          <div className="patients-table-section">

            {/* FILTROS */}

            <div className="table-filters">

              <input
                type="text"
                placeholder="Buscar por nombre, teléfono o correo..."
              />

              <select>

                <option>
                  Todos los estados
                </option>

              </select>

              <select>

                <option>
                  Todos los doctores
                </option>

              </select>

              <button className="filter-btn">

                Filtros

              </button>

            </div>

            {/* TABLA */}

            <table className="patients-table">

              <thead>

                <tr>

                  <th>Paciente</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                  <th>Última visita</th>
                  <th>Doctor</th>
                  <th>Acciones</th>

                </tr>

              </thead>

              <tbody>

                <tr className="active-row">

                  <td>

                    <div className="patient-cell">

                      <div className="patient-avatar">

                        NP

                      </div>

                      <div>

                        <h4>
                          (nombre paciente)
                        </h4>

                        <p>
                          ID: P-000001
                        </p>

                      </div>

                    </div>

                  </td>

                  <td>
                    (telefono paciente)
                  </td>

                  <td>
                    (correo paciente)
                  </td>

                  <td>
                    (ultima visita)
                  </td>

                  <td>
                    Dr. (nombre doctor)
                  </td>

                  <td>

                    <div className="table-actions">

                      <button>
                        👁
                      </button>

                      <button>
                        ✎
                      </button>

                      <button>
                        ⋮
                      </button>

                    </div>

                  </td>

                </tr>

                <tr>

                  <td>

                    <div className="patient-cell">

                      <div className="patient-avatar green">

                        NP

                      </div>

                      <div>

                        <h4>
                          (nombre paciente)
                        </h4>

                        <p>
                          ID: P-000002
                        </p>

                      </div>

                    </div>

                  </td>

                  <td>
                    (telefono paciente)
                  </td>

                  <td>
                    (correo paciente)
                  </td>

                  <td>
                    (ultima visita)
                  </td>

                  <td>
                    Dra. (nombre doctor)
                  </td>

                  <td>

                    <div className="table-actions">

                      <button>
                        👁
                      </button>

                      <button>
                        ✎
                      </button>

                      <button>
                        ⋮
                      </button>

                    </div>

                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          {/* PANEL DERECHO */}

          <div className="patient-info-panel">

            <div className="patient-header">

              <div className="big-avatar">

                NP

              </div>

              <div>

                <h2>
                  (nombre paciente)
                </h2>

                <p>
                  ID: P-000001
                </p>

              </div>

            </div>

            {/* TABS */}

            <div className="patient-tabs">

              <button className="active-tab">

                Información

              </button>

              <button>

                Historial

              </button>

              <button>

                Citas

              </button>

              <button>

                Pagos

              </button>

            </div>

            {/* DATOS */}

            <div className="info-card">

              <div className="card-header">

                <h3>
                  Datos personales
                </h3>

                <button>
                  Editar
                </button>

              </div>

              <div className="info-list">

                <div>

                  <span>
                    Fecha de nacimiento
                  </span>

                  <p>
                    (fecha nacimiento)
                  </p>

                </div>

                <div>

                  <span>
                    Género
                  </span>

                  <p>
                    (género)
                  </p>

                </div>

                <div>

                  <span>
                    Teléfono
                  </span>

                  <p>
                    (telefono paciente)
                  </p>

                </div>

                <div>

                  <span>
                    Correo electrónico
                  </span>

                  <p>
                    (correo paciente)
                  </p>

                </div>

                <div>

                  <span>
                    Dirección
                  </span>

                  <p>
                    (dirección paciente)
                  </p>

                </div>

              </div>

            </div>

            {/* NOTAS */}

            <div className="notes-card">

              <div className="card-header">

                <h3>
                  Notas
                </h3>

                <button>
                  Editar
                </button>

              </div>

              <p>
                (notas paciente)
              </p>

            </div>

            {/* ELIMINAR */}

            <button className="delete-btn">

              Eliminar paciente

            </button>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Patients