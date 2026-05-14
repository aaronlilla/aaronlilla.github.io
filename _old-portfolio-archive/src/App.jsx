import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './pages/DashboardLayout';
import './index.scss';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<DashboardLayout />} />
    </Routes>
  );
}

export default App;
