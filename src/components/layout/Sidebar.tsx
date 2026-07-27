import {
  LayoutDashboard,
  Users,
  Building2,
  ShieldCheck,
  KeyRound,
  User,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Employees",
    icon: Users,
    path: "/employees",
  },
  {
    title: "Departments",
    icon: Building2,
    path: "/departments",
  },
  {
    title: "Roles",
    icon: ShieldCheck,
    path: "/roles",
  },
  {
    title: "Permissions",
    icon: KeyRound,
    path: "/permissions",
  },
  {
    title: "My Profile",
    icon: User,
    path: "/profile",
  },
];

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transition-transform duration-300 lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-slate-700 p-6">
          <div>
            <h2 className="text-xl font-bold">Nath & Sons</h2>

            <p className="text-xs text-slate-400">Employee Management System</p>
          </div>

          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-slate-800 lg:hidden">
            <X size={22} />
          </button>
        </div>

        <nav className="space-y-1 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition-all
                  ${
                    isActive
                      ? "bg-indigo-600 text-white shadow"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`
                }>
                <Icon size={20} />

                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
