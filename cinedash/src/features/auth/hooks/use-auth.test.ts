import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useAuth } from "./use-auth";

describe("useAuth", () => {
  it("deve iniciar sem usuário autenticado", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it("deve realizar login corretamente", async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login(
        { email: "teste@email.com" },
        "fake-jwt-token",
      );
    });

    expect(result.current.user?.email).toBe("teste@email.com");
    expect(result.current.token).toBe("fake-jwt-token");
    expect(result.current.isAuthenticated).toBe(true);
  });

  it("deve realizar logout corretamente", async () => {
    const { result } = renderHook(() => useAuth());

    await act(async () => {
      await result.current.login(
        { email: "teste@email.com" },
        "fake-jwt-token",
      );
    });

    act(() => {
      result.current.logout();
    });

    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });
});
