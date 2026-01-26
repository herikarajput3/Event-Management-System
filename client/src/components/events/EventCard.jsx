import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faLocationDot,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function EventCard({ event }) {
    const { _id, title, date, location, organizerId } = event;

    return (
        <div className="
      relative rounded-2xl bg-base-100 p-6
      shadow-sm hover:shadow-md
      transition-all duration-200
      hover:-translate-y-0.5
      ring-1 ring-base-200">
            <span className="absolute left-0 top-6 h-12 w-1 rounded-r bg-primary/70"></span>

            {/* Info */}
            <div className="pl-3">

                <h3 className="text-lg font-semibold text-base-content">
                    {title}
                </h3>

                <div className="mt-4 space-y-2 text-sm text-base-content/70">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="text-primary/70"
                        />
                        <span>{new Date(date).toDateString()}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-primary/70"
                        />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faUser} className="text-primary/70"
                        />
                        <span>By {organizerId?.name}</span>
                    </div>
                </div>
            </div>

            {/* Action */}
            <div className="mt-5">

                <Link
                    to={`/events/${_id}`}
                    className="
              inline-flex items-center gap-1
              text-sm font-medium text-primary
            "
                >
                    View details →
                </Link>

            </div>
        </div>
    );
}
