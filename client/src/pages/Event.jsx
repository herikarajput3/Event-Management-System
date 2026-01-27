import { useEffect, useState } from "react";
import EventsGrid from "../components/events/EventsGrid";
import axiosInstance from "../services/axios";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";

export default function Event() {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await axiosInstance.get("/events");
                setEvents(response.data);
            } catch (error) {
                console.error("Error fetching events:", error);
                setError("Failed to load events. Please try again.");

            } finally {
                setLoading(false);
            }
        }
        fetchEvents();
    }, []);
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

            <div className="mt-16">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <div className="text-center py-20 text-error">
                        {error}
                    </div>
                ) : events.length === 0 ? (
                    <div className="flex justify-center">
                        <div className="max-w-md w-full rounded-2xl bg-base-200 p-10 text-center">
                            {/* Icon */}
                            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                📅
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">
                                No upcoming events
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-sm opacity-70">
                                There are no scheduled events at the moment.
                                {user?.role === "organizer"
                                    ?
                                    "Be the first to create one."
                                    : " Please check back later."}
                            </p>

                            {/* CTA */}
                            {user?.role === "organizer" && (
                                <div className="mt-6">
                                    <button className="btn btn-sm btn-primary">
                                        Create an event
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                ) : (
                    <EventsGrid events={events} />
                )}


            </div>

        </div>
    );
}
