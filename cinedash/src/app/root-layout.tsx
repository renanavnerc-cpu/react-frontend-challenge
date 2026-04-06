import { useAuthStore } from "@/features/auth/store/auth-store";
import { LoginPage } from "@/features/auth/pages/login-page";
import { Dashboard } from "@/features/movies/pages/dashboard";
import { AppLayout } from "@/shared/layouts/app-layout";

export const RootLayout = () => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  ) : (
    <LoginPage />
  );
};
