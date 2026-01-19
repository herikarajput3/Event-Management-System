import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-base-100 shadow-md">
      <div className="p-4 text-xl font-bold">
        Dashboard
      </div>

      <ul className="menu p-4">
        <li><Link to="/dashboard">Overview</Link></li>
        <li><Link to="/dashboard/events">My Events</Link></li>
        <li><Link to="/dashboard/events/new">Create Event</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
