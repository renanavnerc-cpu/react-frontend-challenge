import { describe, it, expect, beforeEach } from "vitest";
import { useAuthStore } from "./auth-store";

describe("Auth Store", () => {
  beforeEach(() => {
    useAuthStore.getState().logout();
  });

  it("deve iniciar deslogado", () => {
    const state = useAuthStore.getState();

    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });

  it("deve realizar login corretamente", () => {
    const { login } = useAuthStore.getState();

    login({ email: "teste@email.com" }, "fake-jwt-token");

    const state = useAuthStore.getState();

    expect(state.user?.email).toBe("teste@email.com");
    expect(state.token).toBe("fake-jwt-token");
    expect(state.isAuthenticated).toBe(true);
  });

  it("deve realizar logout corretamente", () => {
    const { login, logout } = useAuthStore.getState();

    login({ email: "teste@email.com" }, "fake-jwt-token");

    logout();

    const state = useAuthStore.getState();

    expect(state.user).toBeNull();
    expect(state.token).toBeNull();
    expect(state.isAuthenticated).toBe(false);
  });
});
