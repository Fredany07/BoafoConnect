import React from "react";
import { Navigate, Outlet , useLocation} from "react-router-dom";
const ProtectedRoute = ({ requireRole }) => {
  return <Outlet />;
}
export default ProtectedRoute;