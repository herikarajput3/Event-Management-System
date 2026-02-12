const DashboardHome = () => {
  return (
    <div className="space-y-10">

      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>
        <p className="text-base-content/70 mt-1">
          Here’s what’s happening with your events.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-base-100 p-6 rounded-xl border border-base-300">
          <p className="text-sm text-base-content/60">
            Total Events
          </p>
          <h2 className="text-2xl font-bold mt-2">
            12
          </h2>
        </div>

        <div className="bg-base-100 p-6 rounded-xl border border-base-300">
          <p className="text-sm text-base-content/60">
            Upcoming Events
          </p>
          <h2 className="text-2xl font-bold mt-2">
            4
          </h2>
        </div>

        <div className="bg-base-100 p-6 rounded-xl border border-base-300">
          <p className="text-sm text-base-content/60">
            Total Attendees
          </p>
          <h2 className="text-2xl font-bold mt-2">
            356
          </h2>
        </div>

      </div>

      {/* Recent Events */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Recent Events
        </h2>

        <div className="bg-base-100 border border-base-300 rounded-xl divide-y">

          {[
            {
              title: "Tech Conference 2026",
              date: "12 Mar 2026",
              location: "Ahmedabad",
            },
            {
              title: "Startup Meetup",
              date: "28 Mar 2026",
              location: "Bangalore",
            },
          ].map((event, i) => (
            <div
              key={i}
              className="p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-medium">
                  {event.title}
                </p>
                <p className="text-sm text-base-content/60">
                  {event.date} • {event.location}
                </p>
              </div>

              <span className="badge badge-primary badge-outline">
                Upcoming
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Quick Action */}
      <div>
        <button className="btn btn-primary">
          + Create New Event
        </button>
      </div>

    </div>
  );
};

export default DashboardHome;
