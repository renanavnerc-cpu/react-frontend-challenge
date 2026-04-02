import {
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { LoginPage } from "@/features/auth/pages/login-page";
import { NotFound } from "@/shared/pages/not-found";

const rootRoute = createRootRoute({
  notFoundComponent: NotFound,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LoginPage,
});

const routeTree = rootRoute.addChildren([loginRoute]);

export const router = createRouter({
  routeTree,
});
