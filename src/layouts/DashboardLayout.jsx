import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, ArrowLeft, LogOut } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const userInitial = user?.email?.charAt(0)?.toUpperCase() || "👤";

  const NavLinks = ({ isMobile = false }) => (
    <nav className="flex flex-col space-y-4">
      <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-700">
        <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center text-lg font-semibold">
          {userInitial}
        </div>
        <div>
          <div className="text-sm font-semibold">My Profile</div>
          <div className="text-xs text-gray-300 truncate max-w-[150px]">{user?.email}</div>
        </div>
      </div>

      <Link
        to="/"
        onClick={isMobile ? toggleSidebar : undefined}
        className="flex items-center gap-2 hover:text-blue-400 transition text-sm"
      >
        <Home size={18} /> Home
      </Link>

      <button
        onClick={() => {
          navigate(-1);
          if (isMobile) toggleSidebar();
        }}
        className="flex items-center gap-2 hover:text-blue-400 transition text-sm"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <button
        onClick={() => {
          logout();
          if (isMobile) toggleSidebar();
        }}
        className="mt-6 flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium transition"
      >
        <LogOut size={18} /> Logout
      </button>
    </nav>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden md:flex md:flex-col w-64 bg-black text-white p-4">
        <h2 className="text-xl mb-6 font-bold">Business Nexus</h2>
        <NavLinks />
      </aside>

      <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-black text-white p-4 z-50">
        <h2 className="text-lg font-semibold">Business Nexus</h2>
        <button onClick={toggleSidebar}>{sidebarOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>
          <aside className="absolute left-0 top-0 h-full w-64 bg-black text-white p-4 z-50">
            <NavLinks isMobile />
          </aside>
        </div>
      )}

      <main className="flex-1 overflow-y-auto pt-16 md:pt-0 p-6 bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
