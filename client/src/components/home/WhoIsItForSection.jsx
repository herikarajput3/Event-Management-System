import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserGroup,
    faCalendarDays,
    faMagnifyingGlass,
    faTicket,
    faBell,
    faPlus,
    faUsers,
    faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function WhoIsItForSection() {
    return (
        <section className="py-24 px-4 sm:px-6 bg-base-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    Built for everyone
                </h2>
                <p className="mt-3 text-sm sm:text-base opacity-75">
                    Whether you’re attending an event or organizing one, EventHub fits your needs.
                </p>


                <div className="mt-16 grid gap-8 sm:grid-cols-2">
                    {/* Attendees */}
                    <div className="rounded-2xl bg-base-200 p-10 text-left">
                        <FontAwesomeIcon
                            icon={faUserGroup}
                            className="text-3xl text-primary mb-6"
                        />

                        <h3 className="text-xl font-semibold">
                            For attendees
                        </h3>
                        <p className="mt-2 text-sm opacity-75">
                            Discover events you care about and be part of what’s happening.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3 text-sm">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="opacity-70" />
                                <span>Discover upcoming events</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <FontAwesomeIcon icon={faTicket} className="opacity-70" />
                                <span>Join events with ease</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <FontAwesomeIcon icon={faBell} className="opacity-70" />
                                <span>Stay updated</span>
                            </div>
                        </div>
                    </div>

                    {/* Organizers */}
                    <div className="rounded-2xl bg-base-200 p-10 text-left">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="text-3xl text-primary mb-6"
                        />

                        <h3 className="text-xl font-semibold">
                            For organizers
                        </h3>
                        <p className="mt-2 text-sm opacity-75">
                            Create and manage events without unnecessary complexity.
                        </p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3 text-sm">
                                <FontAwesomeIcon icon={faPlus} className="opacity-70" />
                                <span>Create events in minutes</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <FontAwesomeIcon icon={faUsers} className="opacity-70" />
                                <span>Manage attendees easily</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <FontAwesomeIcon icon={faLayerGroup} className="opacity-70" />
                                <span>Everything in one place</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
