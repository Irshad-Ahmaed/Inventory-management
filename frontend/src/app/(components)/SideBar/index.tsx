import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Archive, CircleDollarSignIcon, Clipboard, Icon, Layout, LucideIcon, Menu, SlidersHorizontal, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: String;
  icon: LucideIcon;
  label: String;
  isCollapsed: boolean;
}

const SidebarLink = ({href, icon: Icon, label, isCollapsed}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname == href || (pathname == "/" && href == "/dashboard");

  return (
    <Link href={`${href}`}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
            } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors 
            
            ${isActive ? "bg-blue-200 text-white" : ""}`
        }
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>{label}</span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSideBar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
    <div className={sidebarClassNames}>
      {/* Top Logo */}
      <div
        className={`flex gap-3 items-center justify-between md:justify-normal pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <div>logo</div>
        <h1
          className={`font-extrabold text-2xl ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          IRSHAD
        </h1>

        <button
          onClick={toggleSideBar}
          className="md:hidden hover:bg-blue-100 px-3 py-3 bg-gray-100 rounded-full"
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Links */}

      <div className="flex-grow mt-8">
        <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/inventory" icon={Archive} label="Inventory" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/products" icon={Clipboard} label="Products" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/users" icon={User} label="Users" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/settings" icon={SlidersHorizontal} label="Settings" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/expenses" icon={CircleDollarSignIcon} label="Expenses" isCollapsed={isSidebarCollapsed} />
      </div>

      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-xs text-center text-gray-500">
          &copy; 2024 Ir Dashboard
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
