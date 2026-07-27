import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
}
