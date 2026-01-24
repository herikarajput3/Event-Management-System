import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/events">Events</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
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
            {["/", "/events", "/about"].map((path, i) => {
              const labels = ["Home", "Events", "About"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary"
                      : "text-base-content/70 hover:text-primary"
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="navbar-end gap-2">
          <Link to="/login" className="btn btn-ghost btn-sm">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary btn-sm">
            Register
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
