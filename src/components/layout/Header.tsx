import { Menu } from "lucide-react";

import LogoutButton from "@/components/auth/LogoutButton";
import { useAppSelector } from "@/store/hooks";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-md p-2 hover:bg-slate-100 lg:hidden">
          <Menu size={22} />
        </button>

        <h1 className="text-lg font-semibold sm:text-xl">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
            {user?.firstName?.charAt(0)}
            {user?.lastName?.charAt(0)}
          </div>

          <div className="hidden text-right sm:block">
            <p className="font-medium">
              {user?.firstName} {user?.lastName}
            </p>

            <p className="text-sm text-slate-500">{user?.role}</p>
          </div>
        </div>

        <LogoutButton />
      </div>
    </header>
  );
}
