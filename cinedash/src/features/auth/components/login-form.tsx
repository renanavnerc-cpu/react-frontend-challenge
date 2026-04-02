import { useForm } from "@tanstack/react-form";
import { loginSchema } from "../schemas/login-schema";
import type { LoginFormData } from "../schemas/login-schema";
import { authService } from "../services/auth-service";
import { useAuth } from "../hooks/use-auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LoginForm() {
  const { login } = useAuth();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    } as LoginFormData,

    onSubmit: async ({ value }) => {
      const response = await authService.login(value);

      login(response.user, response.token);
    },
  });

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          <form.Field
            name="email"
            validators={{
              onChange: loginSchema.shape.email,
            }}
          >
            {(field) => (
              <div>
                <Input
                  placeholder="Email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />

                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors[0].message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          <form.Field
            name="password"
            validators={{
              onChange: loginSchema.shape.password,
            }}
          >
            {(field) => (
              <div>
                <Input
                  type="password"
                  placeholder="Senha"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />

                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors[0].message}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
