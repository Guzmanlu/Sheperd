import './History.css'

import Sidebar from '../../components/Sidebars/Sidebar'

function History() {

  return (

    <div className="history-layout">

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENIDO */}

      <div className="history-content">

        {/* TOPBAR */}

        <div className="history-topbar">

          <div>

            <button className="back-btn">

              ← Volver a pacientes

            </button>

            <h1>
              Historial Clínico
            </h1>

            <p>
              Consulta y gestiona la información clínica del paciente.
            </p>

          </div>

          <div className="history-search">

            <input
              type="text"
              placeholder="Buscar paciente..."
            />

          </div>

        </div>

        {/* PACIENTE */}

        <div className="patient-summary">

          <div className="summary-left">

            <div className="summary-avatar">

              NP

            </div>

            <div>

              <h2>
                (nombre paciente)
              </h2>

              <p>
                ID: P-000185 • (edad) años • (género)
              </p>

            </div>

          </div>

          <div className="summary-info">

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
                Teléfono
              </span>

              <p>
                (telefono paciente)
              </p>

            </div>

          </div>

        </div>

        {/* TABS */}

        <div className="history-tabs">

          <button>
            Resumen
          </button>

          <button className="active-tab">
            Historial Clínico
          </button>

          <button>
            Citas
          </button>

          <button>
            Documentos
          </button>

          <button>
            Pagos
          </button>

        </div>

        {/* GRID */}

        <div className="history-grid">

          {/* CONSULTAS */}

          <div className="consultations-panel">

            <h3>
              Consultas anteriores
            </h3>

            {/* CONSULTA */}

            <div className="consultation-card active-consultation">

              <div>

                <span>
                  (fecha consulta)
                </span>

                <h4>
                  Control médico
                </h4>

                <p>
                  Consulta de seguimiento
                </p>

              </div>

              <button>

                ❯

              </button>

            </div>

            <div className="consultation-card">

              <div>

                <span>
                  (fecha consulta)
                </span>

                <h4>
                  Resultados de estudios
                </h4>

                <p>
                  Revisión médica
                </p>

              </div>

              <button>

                ❯

              </button>

            </div>

            <div className="consultation-card">

              <div>

                <span>
                  (fecha consulta)
                </span>

                <h4>
                  Primera consulta
                </h4>

                <p>
                  Evaluación inicial
                </p>

              </div>

              <button>

                ❯

              </button>

            </div>

            <button className="more-btn">

              Ver más consultas

            </button>

          </div>

          {/* DETALLE */}

          <div className="consultation-detail">

            <div className="detail-header">

              <h2>
                Consulta del (fecha consulta)
              </h2>

              <button className="new-consultation-btn">

                + Nueva consulta

              </button>

            </div>

            {/* MOTIVO */}

            <div className="detail-section">

              <h3>
                Motivo de consulta
              </h3>

              <p>
                (motivo consulta)
              </p>

            </div>

            {/* SIGNOS */}

            <div className="detail-section">

              <h3>
                Signos vitales
              </h3>

              <div className="vitals-grid">

                <div className="vital-card">

                  <span>
                    Presión arterial
                  </span>

                  <h4>
                    (presión)
                  </h4>

                </div>

                <div className="vital-card">

                  <span>
                    Frecuencia cardíaca
                  </span>

                  <h4>
                    (frecuencia)
                  </h4>

                </div>

                <div className="vital-card">

                  <span>
                    Temperatura
                  </span>

                  <h4>
                    (temperatura)
                  </h4>

                </div>

                <div className="vital-card">

                  <span>
                    Peso
                  </span>

                  <h4>
                    (peso)
                  </h4>

                </div>

              </div>

            </div>

            {/* DIAGNOSTICO */}

            <div className="detail-section">

              <h3>
                Diagnóstico
              </h3>

              <p>
                (diagnóstico médico)
              </p>

            </div>

            {/* TRATAMIENTO */}

            <div className="detail-section">

              <h3>
                Tratamiento
              </h3>

              <ul>

                <li>
                  (tratamiento médico)
                </li>

                <li>
                  (medicamento)
                </li>

                <li>
                  (recomendación)
                </li>

              </ul>

            </div>

            {/* OBSERVACIONES */}

            <div className="detail-section">

              <h3>
                Observaciones
              </h3>

              <p>
                (observaciones médicas)
              </p>

            </div>

            {/* PROXIMA CITA */}

            <div className="next-appointment">

              <h3>
                Próxima cita
              </h3>

              <p>
                (fecha próxima cita)
              </p>

            </div>

            {/* BOTONES */}

            <div className="detail-actions">

              <button className="edit-btn">

                Editar consulta

              </button>

              <button className="print-btn">

                Imprimir

              </button>

            </div>

          </div>

          {/* PANEL DERECHO */}

          <div className="history-sidepanel">

            {/* INFO */}

            <div className="side-card">

              <div className="side-header">

                <h3>
                  Información del paciente
                </h3>

                <button>
                  Editar
                </button>

              </div>

              <div className="side-info">

                <div>

                  <span>
                    Correo
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

                <div>

                  <span>
                    Contacto de emergencia
                  </span>

                  <p>
                    (contacto emergencia)
                  </p>

                </div>

                <div>

                  <span>
                    Alergias
                  </span>

                  <p>
                    (alergias)
                  </p>

                </div>

              </div>

            </div>

            {/* DOCUMENTOS */}

            <div className="side-card">

              <div className="side-header">

                <h3>
                  Documentos clínicos
                </h3>

                <button>
                  Ver todos
                </button>

              </div>

              <div className="document-item">

                <p>
                  (documento clínico)
                </p>

                <span>
                  (fecha documento)
                </span>

              </div>

              <div className="document-item">

                <p>
                  (documento clínico)
                </p>

                <span>
                  (fecha documento)
                </span>

              </div>

            </div>

            {/* ALERTA */}

            <div className="privacy-alert">

              <h4>
                La información clínica es confidencial.
              </h4>

              <p>
                Asegúrese de mantener la privacidad del paciente.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

export default History