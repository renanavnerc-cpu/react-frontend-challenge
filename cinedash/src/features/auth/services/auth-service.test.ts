import { describe, it, expect } from "vitest";
import { authService } from "./auth-service";

describe("authService", () => {
  it("deve retornar usuário e token ao realizar login", async () => {
    const response = await authService.login({
      email: "teste@email.com",
      password: "123456",
    });

    expect(response).toEqual({
      user: {
        email: "teste@email.com",
      },
      token: "fake-jwt-token",
    });
  });

  it("deve retornar o email correto", async () => {
    const response = await authService.login({
      email: "usuario@email.com",
      password: "123456",
    });

    expect(response.user.email).toBe("usuario@email.com");
  });
});
