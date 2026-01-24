import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="mx-auto w-full max-w-7xl">

            <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 sm:px-6">
                <div className="text-center max-w-xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
                        Discover and host events — all in one place.
                    </h1>

                    <p className="mt-5 text-base sm:text-lg leading-relaxed opacity-80">
                        Browse upcoming events, explore what’s happening around you, or create
                        and manage your own events with ease.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link
                            to="/events"
                            className="btn btn-primary h-12 px-10 text-base font-medium rounded-xl shadow-sm"
                        >
                            Browse Events
                        </Link>

                        <Link
                            to="/create"
                            className="btn btn-outline h-12 px-10 text-base font-medium rounded-xl"
                        >
                            Create Event
                        </Link>
                    </div>

                    <p className="mt-6 text-sm opacity-60">
                        Free to explore. Easy to host.
                    </p>
                </div>
            </div>
        </div>
    );
}
