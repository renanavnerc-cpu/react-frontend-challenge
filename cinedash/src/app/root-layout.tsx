import { useAuthStore } from "@/features/auth/store/auth-store";
import { LoginPage } from "@/features/auth/pages/login-page";
import { Dashboard } from "@/features/movies/pages/dashboard";

export const RootLayout = () => {
  const { isAuthenticated } = useAuthStore();

  return isAuthenticated ? <Dashboard /> : <LoginPage />;
};
