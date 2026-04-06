import { Outlet, useNavigate, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/store/auth-store";
import { AppLayout } from "@/shared/layouts/app-layout";

export const RootLayout = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/login") {
      navigate({ to: "/login" });
    }

    if (isAuthenticated && location.pathname === "/login") {
      navigate({ to: "/" });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  if (!isAuthenticated) {
    return (
      <main className="w-full h-screen">
        <Outlet />
      </main>
    );
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
