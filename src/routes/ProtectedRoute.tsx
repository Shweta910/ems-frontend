import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import type { RootState } from "@/store";

export default function ProtectedRoute() {
  const { isAuthenticated, initialized } = useSelector(
    (state: RootState) => state.auth,
  );

  if (!initialized) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
