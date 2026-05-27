import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importar las páginas existentes
import Patients from './pages/Patients/Patients';
import History from './pages/History/History';
import Payments from './pages/Payments/Payments';
import Reports from './pages/Reports/Reports';
import Appointments from './pages/Appointments/citas'; // ← Añadido

// Importa estas cuando las crees
// import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Página por defecto */}
        <Route path="/" element={<Appointments />} />           {/* Puedes cambiar a Dashboard después */}

        <Route path="/dashboard" element={<Appointments />} />  {/* Temporal */}
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/history" element={<History />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reports" element={<Reports />} />

        {/* Agrega más rutas aquí cuando crees las páginas */}
        {/* <Route path="/messages" element={<Messages />} /> */}
        {/* <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;