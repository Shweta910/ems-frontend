import { Button } from "@/components/ui/button";

import { toast } from "sonner";

import { useSendVerificationEmail } from "../hooks/useSendVerificationEmail";

export default function SendVerificationEmail() {
  const { mutate, data, isPending } =
    useSendVerificationEmail();

  return (
    <div className="space-y-5">
      <Button
        className="w-full"
        disabled={isPending}
        onClick={() =>
          mutate(undefined, {
            onSuccess(response) {
              toast.success(response.message);
            },
          })
        }
      >
        {isPending
          ? "Sending..."
          : "Send Verification Email"}
      </Button>

      {data?.data?.verificationLink && (
        <div className="rounded-lg border p-4 space-y-3">
          <p className="font-medium">
            Verification Link
          </p>

          <p className="break-all text-sm text-muted-foreground">
            {data.data.verificationLink}
          </p>

          <Button
            className="w-full"
            onClick={() =>
              window.open(
                data.data.verificationLink,
                "_self",
              )
            }
          >
            Open Verification Link
          </Button>
        </div>
      )}
    </div>
  );
}