import EventsGrid from "../components/events/EventsGrid";

const mockEvents = [
    {
        _id: "1",
        title: "React Meetup",
        date: "2026-02-10T10:00:00.000Z",
        location: "Delhi",
        organizerId: { name: "EventHub Team" },
    },
    {
        _id: "2",
        title: "JavaScript Conference",
        date: "2026-03-05T09:00:00.000Z",
        location: "Mumbai",
        organizerId: { name: "JS India" },
    },
    {
        _id: "1",
        title: "React Meetup",
        date: "2026-02-10T10:00:00.000Z",
        location: "Delhi",
        organizerId: { name: "EventHub Team" },
    },
    {
        _id: "2",
        title: "JavaScript Conference",
        date: "2026-03-05T09:00:00.000Z",
        location: "Mumbai",
        organizerId: { name: "JS India" },
    },
];

export default function Event() {
    return (
        <div className="px-4 sm:px-6 py-12">
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Explore upcoming events
                </h1>
                <p className="mt-3 text-sm sm:text-base opacity-70">
                    Find events worth attending — talks, meetups, and experiences.
                </p>

            </div>

            <div className="mt-12">
                <EventsGrid events={mockEvents} />
            </div>

        </div>
    );
}
