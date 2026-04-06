import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen px-4 md:px-6 lg:px-10 py-8">{children}</div>
  );
};
