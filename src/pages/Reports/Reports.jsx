import './Reports.css';
import Sidebar from '../../components/Sidebars/Sidebar';

function Reports() {
  return (
    <div className="reports-layout">
      {/* SIDEBAR */}
      <Sidebar />

      {/* CONTENIDO */}
      <div className="reports-content">
        {/* TOPBAR */}
        <div className="reports-topbar">
          <div>
            <h1>Reportes</h1>
            <p>Genera, visualiza y exporta reportes del sistema.</p>
          </div>
          <div className="topbar-actions">
            <button className="export-btn">
              📥 Exportar Todo
            </button>
          </div>
        </div>

        {/* FILTROS */}
        <div className="reports-filters">
          <div className="filter-group">
            <label>Tipo de Reporte</label>
            <select>
              <option>Todos los reportes</option>
              <option>Reporte de Citas</option>
              <option>Reporte de Pagos</option>
              <option>Reporte de Pacientes</option>
              <option>Reporte de Doctores</option>
              <option>Reporte de Ingresos</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Rango de Fechas</label>
            <input type="text" placeholder="01/05/2025 - 26/05/2025" />
          </div>

          <div className="filter-group">
            <label>Doctor</label>
            <select>
              <option>Todos los doctores</option>
              <option>Dr. Alejandro Gómez</option>
              <option>Dra. Laura Rodríguez</option>
            </select>
          </div>

          <button className="generate-btn">Generar Reporte</button>
        </div>

        {/* SUMMARY CARDS */}
        <div className="reports-summary">
          <div className="summary-card">
            <h3>Total Citas</h3>
            <h2>1,248</h2>
            <p className="trend positive">↑ 12% vs mes anterior</p>
          </div>
          <div className="summary-card">
            <h3>Ingresos Totales</h3>
            <h2>$428,750</h2>
            <p className="trend positive">↑ 8.4% vs mes anterior</p>
          </div>
          <div className="summary-card">
            <h3>Pacientes Atendidos</h3>
            <h2>892</h2>
            <p className="trend positive">↑ 5% vs mes anterior</p>
          </div>
          <div className="summary-card">
            <h3>Promedio por Cita</h3>
            <h2>$343</h2>
            <p className="trend negative">↓ 2% vs mes anterior</p>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="reports-grid">
          {/* GRÁFICOS / VISUALIZACIÓN */}
          <div className="reports-main">
            <div className="chart-card">
              <h3>Citas por Mes</h3>
              <div className="chart-placeholder">
                [Gráfico de líneas - Citas mensuales]
              </div>
            </div>

            <div className="chart-card">
              <h3>Distribución de Ingresos</h3>
              <div className="chart-placeholder">
                [Gráfico de pastel - Ingresos por servicio]
              </div>
            </div>
          </div>

          {/* REPORTES RECIENTES */}
          <div className="reports-sidebar">
            <h3>Reportes Recientes</h3>
            
            <div className="report-item">
              <div>
                <h4>Reporte de Citas - Mayo 2025</h4>
                <p>Generado el 25/05/2025 • 48 páginas</p>
              </div>
              <button className="download-btn">↓</button>
            </div>

            <div className="report-item">
              <div>
                <h4>Reporte Financiero - Abril 2025</h4>
                <p>Generado el 02/05/2025 • 32 páginas</p>
              </div>
              <button className="download-btn">↓</button>
            </div>

            <div className="report-item">
              <div>
                <h4>Pacientes Nuevos - Q2 2025</h4>
                <p>Generado el 20/05/2025 • 18 páginas</p>
              </div>
              <button className="download-btn">↓</button>
            </div>

            <button className="view-all-btn">Ver todos los reportes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;