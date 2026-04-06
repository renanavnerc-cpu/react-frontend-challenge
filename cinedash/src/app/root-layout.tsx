import { Outlet } from "@tanstack/react-router";
import { useAuthStore } from "@/features/auth/store/auth-store";
import { LoginPage } from "@/features/auth/pages/login-page";
import { AppLayout } from "@/shared/layouts/app-layout";

export const RootLayout = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};
