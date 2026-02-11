import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const { user, logout } = useAuth();
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/events", label: "Events" },
  ];

  if (user?.role === "organizer") {
    navLinks.push({ to: "/create-event", label: "Create Event" });
  }

  navLinks.push({ to: "/about", label: "About" });
  return (
    <header className="bg-base-100 border-b border-base-300">
      <div className="navbar max-w-6xl mx-auto px-4">

        <div className="navbar-start gap-2">
          {/* Mobile dropdown */}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-sm">
              ☰
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40"
            >
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <Link
            to="/"
            className="text-md md:text-2xl font-bold tracking-wide"
          >
            Event<span className="text-primary">Hub</span>
          </Link>
        </div>

        <div className="navbar-center hidden md:flex">
          <nav className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-base-content/70 hover:text-primary"
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex items-center gap-3">
              <button
                onClick={logout}
                className="btn btn-outline btn-sm"
              >
                Logout
              </button>
            </div>

          ) : (
            <>
              <Link to="/login" className="btn btn-ghost btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
