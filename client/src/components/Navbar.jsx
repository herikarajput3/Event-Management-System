import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold">
            Eventify
          </Link>
        </div>

        <div className="flex-none">
          {!user ? (
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/login">Login</Link></li>
              <li>
                <Link to="/register" className="btn btn-primary btn-sm">
                  Register
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="menu menu-horizontal px-1">
              <li>
                <span className="font-medium">
                  Hi, {user.name}
                </span>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
