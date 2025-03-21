import { useAuth } from "@/hooks/use-auth";
import { Navigate, Outlet } from "react-router";

export function PrivateRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
