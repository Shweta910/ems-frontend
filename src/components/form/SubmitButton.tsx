import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

interface SubmitButtonProps {
  loading: boolean;
  children: ReactNode;
  disabled?: boolean;
  loadingTitle?: string;
}

export default function SubmitButton({
  loading,
  children,
  disabled = false,
  loadingTitle = "Please wait...",
}: SubmitButtonProps) {
  return (
    <Button type="submit" className="w-full" disabled={loading || disabled}>
      {loading ? loadingTitle : children}
    </Button>
  );
}
