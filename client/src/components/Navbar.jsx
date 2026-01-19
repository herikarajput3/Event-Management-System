import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="container mx-auto px-4">

        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            Eventify
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
