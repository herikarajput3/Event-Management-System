import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faEye,
    faUserCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function TrustSection() {
    return (
        <section className="bg-base-200 py-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold">
                    Designed with care
                </h2>

                <p className="mt-3 text-sm sm:text-base opacity-75">
                    Every detail is crafted to make events easier — for everyone.
                </p>


                <div className="mt-14 grid gap-10 sm:grid-cols-3">
                    <div>
                        <FontAwesomeIcon
                            icon={faHeart}
                            className="text-2xl text-primary/80"
                        />
                        <h3 className="mt-4 text-lg font-semibold">
                            Simple by design
                        </h3>
                        <p className="mt-2 text-sm opacity-75">
                            No clutter. No unnecessary steps.
                        </p>
                    </div>

                    <div>
                        <FontAwesomeIcon
                            icon={faEye}
                            className="text-2xl text-primary/80"
                        />
                        <h3 className="mt-4 text-lg font-semibold">
                            Transparent and honest
                        </h3>
                        <p className="mt-2 text-sm opacity-75">
                            What you see is what you get.
                        </p>
                    </div>

                    <div>
                        <FontAwesomeIcon
                            icon={faUserCheck}
                            className="text-2xl text-primary/80"
                        />
                        <h3 className="mt-4 text-lg font-semibold">
                            Built for real people
                        </h3>
                        <p className="mt-2 text-sm opacity-75">
                            Whether you attend or organize.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
