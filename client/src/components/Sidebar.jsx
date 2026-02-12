// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-base-100 border-r border-base-300 min-h-screen">

      {/* Logo / Brand */}
      <div className="px-6 py-5 border-b border-base-300">
        <h2
          className="text-md md:text-2xl font-bold tracking-wide">
          Event<span className="text-primary">Hub</span>
        </h2>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-6">

        {/* MAIN */}
        <div>
          <p className="text-xs font-semibold text-base-content/50 mb-2 uppercase">
            Main
          </p>

          <div className="space-y-1">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-base-200"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/events"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-base-200"
                }`
              }
            >
              My Events
            </NavLink>

            <NavLink
              to="/dashboard/events/new"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm transition ${isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "hover:bg-base-200"
                }`
              }
            >
              Create Event
            </NavLink>
          </div>
        </div>

        {/* ACCOUNT */}
        <div>
          <p className="text-xs font-semibold text-base-content/50 mb-2 uppercase">
            Account
          </p>

          <div className="space-y-1">
            <button className="block w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-base-200">
              Settings
            </button>

            <button className="block w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-base-200 text-error">
              Logout
            </button>
          </div>
        </div>

      </nav>
    </aside>
  );
};

export default Sidebar;
