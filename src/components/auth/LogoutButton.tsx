import useLogout from "@/features/auth/hooks/useLogout";

export default function LogoutButton() {
  const { mutate, isPending } = useLogout();

  return (
    <button
      onClick={() => mutate()}
      disabled={isPending}
      className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700">
      {isPending ? "Logging out..." : "Logout"}
    </button>
  );
}
