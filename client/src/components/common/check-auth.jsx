import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();
  const isAuthPage = location.pathname.startsWith('/auth');
  const isAdminPage = location.pathname.startsWith('/admin');
  const isShopPage = location.pathname.startsWith('/shop');

  // 1. If trying to access auth pages while authenticated
  if (isAuthenticated && isAuthPage) {
    return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/shop/home"} replace />;
  }

  // 2. If trying to access protected pages while unauthenticated
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // 3. Role-based authorization
  if (isAuthenticated) {
    // Non-admins trying to access admin routes
    if (isAdminPage && user?.role !== "admin") {
      return <Navigate to="/unauth-page" replace />;
    }
    // Admins trying to access shop routes
    if (isShopPage && user?.role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
  }

  return <>{children}</>;
}

export default CheckAuth;