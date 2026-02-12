// src/components/Topbar.jsx

import { useAuth } from "../context/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-base-100 border-b border-base-300 px-6 flex items-center justify-between">

      {/* Left — Page Title */}
      <h1 className="text-lg font-semibold text-base-content">
        Dashboard
      </h1>

      {/* Right — User Menu */}
      <div className="flex items-center gap-4">

        {/* User Name */}
        <span className="text-sm text-base-content/70">
          {user?.name || "Organizer"}
        </span>

        {/* Avatar */}
        <div className="avatar">
          <div className="w-9 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-semibold">
            {user?.name?.charAt(0) || "O"}
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="btn btn-sm btn-outline"
        >
          Logout
        </button>

      </div>
    </header>
  );
};

export default Topbar;
