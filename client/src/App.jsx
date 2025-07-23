import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './components/auth/layout';
import AuthLogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';
import AdminLayout from './components/admin-view/layout';
import AdminDashboard from './pages/admin-view/dashboard';
import AdminProductes from './pages/admin-view/products';
import AdminOrders from './pages/admin-view/orders';
import AdminFeatures from './pages/admin-view/features';

function App() {
  return (
    <div className="flex flex-col overflow-hidden">
      <h1>Header done</h1>
      <Routes>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
             <Route path="dashboard" element={<AdminDashboard />} />
             <Route path="products" element={<AdminProductes />} />
             <Route path="orders" element={<AdminOrders />} />
             <Route path="features" element={<AdminFeatures />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
