import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { RootLayout } from "./root-layout";
import { LoginPage } from "@/features/auth/pages/login-page";
import { Dashboard } from "@/features/movies/pages/dashboard";
import { NotFound } from "@/shared/pages/not-found";
import { MovieDetailsPage } from "@/features/movies/pages/movie-details";

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

const movieDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/movie/$id",
  component: MovieDetailsPage,
});

// Monta a árvore de rotas
const routeTree = rootRoute.addChildren([
  loginRoute,
  dashboardRoute,
  movieDetailsRoute,
]);

export const router = createRouter({
  routeTree,
});
