import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import { Loader2 } from "lucide-react";

import { useVerifyEmail } from "../hooks/useVerifyEmail";
import { toast } from "sonner";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token") ?? "";

  const { mutate } = useVerifyEmail();

  const hasVerified = useRef(false);
  useEffect(() => {
    toast.success("Test toast");
  }, []);
  useEffect(() => {
    if (!token) return;

    if (hasVerified.current) return;

    hasVerified.current = true;

    mutate(token);
  }, [token, mutate]);

  useEffect(() => {
    console.log("VerifyEmail mounted");

    return () => {
      console.log("VerifyEmail unmounted");
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <Loader2 className="h-8 w-8 animate-spin" />

      <p>Verifying your email...</p>
    </div>
  );
}
