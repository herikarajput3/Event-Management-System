import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faTicket,
    faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function HowItWorksSection() {
    return (
        <section className="bg-base-200 py-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    How Event<span className="text-primary">Hub</span> works
                </h2>
                <p className="mt-3 text-sm sm:text-base opacity-75">
                    A simple, straightforward way to discover, join, and create events.
                </p>


                <div className="mt-16 grid gap-8 sm:grid-cols-3">
                    {/* Step 1 */}
                    <div className="rounded-2xl bg-base-100 p-10">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="text-3xl text-primary/80"
                        />
                        <h3 className="mt-4 text-xl font-semibold">
                            Discover events
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed opacity-70">
                            Explore upcoming events and see what’s happening around you.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-2xl bg-base-100 p-10">
                        <FontAwesomeIcon
                            icon={faTicket}
                            className="text-3xl text-primary/80"
                        />
                        <h3 className="mt-4 text-xl font-semibold">
                            Join & attend
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed opacity-70">
                            Find events that interest you and take part with ease.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="rounded-2xl bg-base-100 p-10">
                        <FontAwesomeIcon
                            icon={faCalendarPlus}
                            className="text-3xl text-primary/80"
                        />
                        <h3 className="mt-4 text-xl font-semibold">
                            Create your own
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed opacity-70">
                            Host your own event and manage everything from one place.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
