import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-base-100 border-b border-base-300">
      <div className="navbar max-w-6xl mx-auto px-4">

        {/* Left: Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-xl font-bold tracking-wide"
          >
            Event<span className="text-primary">Hub</span>
          </Link>
        </div>

        {/* Center: Links */}
        <div className="navbar-center hidden md:flex">
          <nav className="flex gap-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "text-base-content/70 hover:text-primary"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "text-base-content/70 hover:text-primary"
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-primary"
                  : "text-base-content/70 hover:text-primary"
              }
            >
              About
            </NavLink>
          </nav>
        </div>

        {/* Right: Auth actions (static for now) */}
        <div className="navbar-end gap-2">
          <Link
            to="/login"
            className="btn btn-ghost btn-sm"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="btn btn-primary btn-sm"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
