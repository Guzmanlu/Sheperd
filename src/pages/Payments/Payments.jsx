import './Payments.css'

import Sidebar from '../../components/Sidebars/Sidebar'

function Payments() {

  return (

    <div className="payments-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENIDO */}

      <div className="payments-content">

        {/* TOPBAR */}

        <div className="payments-topbar">

          <div>

            <h1>
              Pagos
            </h1>

            <p>
              Registra, consulta y gestiona los pagos realizados por los pacientes.
            </p>

          </div>

          <div className="payments-actions">

            <input
              type="text"
              placeholder="Buscar por paciente, folio o concepto..."
            />

            <button>

              + Registrar pago

            </button>

          </div>

        </div>

        {/* TABS */}

        <div className="payments-tabs">

          <button className="active-payment-tab">
            Pagos realizados
          </button>

          <button>
            Adeudos
          </button>

          <button>
            Todos los pagos
          </button>

          <button>
            Métodos de pago
          </button>

        </div>

        {/* GRID */}

        <div className="payments-grid">

          {/* TABLA */}

          <div className="payments-table-container">

            {/* FILTROS */}

            <div className="payments-filters">

              <div className="filter-group">

                <label>
                  Rango de fechas
                </label>

                <input
                  type="text"
                  placeholder="01/05/2025 - 20/05/2025"
                />

              </div>

              <div className="filter-group">

                <label>
                  Doctor
                </label>

                <select>

                  <option>
                    Todos los doctores
                  </option>

                </select>

              </div>

              <div className="filter-group">

                <label>
                  Estado
                </label>

                <select>

                  <option>
                    Todos los estados
                  </option>

                </select>

              </div>

              <div className="filter-group">

                <label>
                  Método de pago
                </label>

                <select>

                  <option>
                    Todos los métodos
                  </option>

                </select>

              </div>

            </div>

            {/* TABLA */}

            <table className="payments-table">

              <thead>

                <tr>

                  <th>Fecha</th>
                  <th>Folio</th>
                  <th>Paciente</th>
                  <th>Doctor</th>
                  <th>Concepto</th>
                  <th>Método</th>
                  <th>Monto</th>
                  <th>Estado</th>
                  <th>Acciones</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>
                    (fecha pago)
                  </td>

                  <td>
                    (folio pago)
                  </td>

                  <td>
                    (nombre paciente)
                  </td>

                  <td>
                    (nombre doctor)
                  </td>

                  <td>
                    Consulta médica
                  </td>

                  <td>
                    Tarjeta
                  </td>

                  <td>
                    $0000
                  </td>

                  <td>

                    <span className="completed-status">

                      Completado

                    </span>

                  </td>

                  <td>

                    ⋮

                  </td>

                </tr>

                <tr>

                  <td>
                    (fecha pago)
                  </td>

                  <td>
                    (folio pago)
                  </td>

                  <td>
                    (nombre paciente)
                  </td>

                  <td>
                    (nombre doctor)
                  </td>

                  <td>
                    Seguimiento
                  </td>

                  <td>
                    Efectivo
                  </td>

                  <td>
                    $0000
                  </td>

                  <td>

                    <span className="completed-status">

                      Completado

                    </span>

                  </td>

                  <td>

                    ⋮

                  </td>

                </tr>

              </tbody>

            </table>

            {/* PAGINACION */}

            <div className="payments-pagination">

              <button>

                ‹

              </button>

              <button className="active-page">

                1

              </button>

              <button>

                2

              </button>

              <button>

                3

              </button>

              <button>

                ›

              </button>

            </div>

          </div>

          {/* PANEL DERECHO */}

          <div className="payments-sidebar">

            {/* RESUMEN */}

            <div className="payment-card">

              <h3>
                Resumen del día
              </h3>

              <p className="summary-date">
                (fecha actual)
              </p>

              <div className="summary-item">

                <div>

                  <h2>
                    $0000
                  </h2>

                  <span>
                    Ingresos del día
                  </span>

                </div>

              </div>

              <div className="summary-item">

                <div>

                  <h2>
                    0
                  </h2>

                  <span>
                    Pagos realizados
                  </span>

                </div>

              </div>

              <div className="summary-item">

                <div>

                  <h2>
                    0
                  </h2>

                  <span>
                    Pacientes atendidos
                  </span>

                </div>

              </div>

            </div>

            {/* NUEVO PAGO */}

            <div className="payment-card">

              <h3>
                Registrar nuevo pago
              </h3>

              <p>
                Registra un pago realizado por un paciente.
              </p>

              <button className="new-payment-btn">

                + Nuevo pago

              </button>

            </div>

            {/* METODOS */}

            <div className="payment-card">

              <h3>
                Métodos de pago
              </h3>

              <div className="method-item">

                <span>
                  Efectivo
                </span>

                <strong>
                  45%
                </strong>

              </div>

              <div className="method-item">

                <span>
                  Tarjeta
                </span>

                <strong>
                  35%
                </strong>

              </div>

              <div className="method-item">

                <span>
                  Transferencia
                </span>

                <strong>
                  20%
                </strong>

              </div>

            </div>

            {/* ADEUDOS */}

            <div className="payment-card debt-card">

              <h3>
                Adeudos pendientes
              </h3>

              <h2>
                $0000
              </h2>

              <p>
                0 pacientes con adeudos
              </p>

              <button className="debt-btn">

                Ver adeudos

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default Payments