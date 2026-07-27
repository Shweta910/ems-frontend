import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";

interface Props {
  children: ReactNode;
}

export default function AuthCard({ children }: Props) {
  return (
    <Card className="w-full max-w-md rounded-2xl border shadow-2xl auth__card">
      <CardContent className="space-y-8 p-8">{children}</CardContent>
    </Card>
  );
}
