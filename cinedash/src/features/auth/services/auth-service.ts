import type { LoginFormData } from "../schemas/login-schema";

export const authService = {
  login: async (data: LoginFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      user: {
        email: data.email,
      },
      token: "fake-jwt-token",
    };
  },
};
