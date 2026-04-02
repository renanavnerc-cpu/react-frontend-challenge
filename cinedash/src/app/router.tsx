import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { RootLayout } from "./root-layout";
import { LoginPage } from "@/features/auth/pages/login-page";
import { Dashboard } from "@/features/movies/pages/dashboard";
import { NotFound } from "@/shared/pages/not-found";

// RootRoute usando RootLayout
const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

// Rotas filhas
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: Dashboard,
});

// Monta a árvore de rotas
const routeTree = rootRoute.addChildren([loginRoute, dashboardRoute]);

export const router = createRouter({
  routeTree,
});
