import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "attendee",
    })

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error("Registration failed");
            }

            // success → go to home
            navigate("/");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full">
            {/* Heading */}
            <div className="text-center mb-8 space-y-2">
                <h1 className="text-2xl font-semibold text-neutral">
                    Create your account ✨
                </h1>
                <p className="text-sm text-gray-500">
                    Join us and start managing events
                </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="label pb-0">
                        <span className="label-text text-sm font-medium">
                            Full name
                        </span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input input-bordered h-11 w-full focus:outline-none focus:border-primary"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="label pb-0">
                        <span className="label-text text-sm font-medium">
                            Email
                        </span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@example.com"
                        className="input input-bordered h-11 w-full focus:outline-none focus:border-primary"
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                    <label className="label pb-0">
                        <span className="label-text text-sm font-medium">
                            Password
                        </span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Create a strong password"
                        className="input input-bordered h-11 w-full focus:outline-none focus:border-primary"
                    />
                </div>

                {/* Role selection */}
                <div className="flex flex-col gap-3">
                    <label className="label pb-0">
                        <span className="label-text text-sm font-medium">
                            I am registering as
                        </span>
                    </label>

                    <div className="flex gap-4">
                        <label className="flex items-center gap-1 cursor-pointer">
                            <input
                                type="radio"
                                name="role"
                                value="attendee"
                                checked={form.role === "attendee"}
                                onChange={handleChange}
                                className="radio radio-primary radio-sm scale-75"
                            />
                            <span className="text-sm">Attendee</span>
                        </label>

                        <label className="flex items-center gap-1 cursor-pointer">
                            <input
                                type="radio"
                                name="role"
                                value="organizer"
                                checked={form.role === "organizer"}
                                onChange={handleChange}
                                className="radio radio-primary radio-sm scale-75"
                            />
                            <span className="text-sm">Organizer</span>
                        </label>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <p className="text-sm text-error">{error}</p>
                )}

                {/* submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full h-11 text-base font-medium"
                >
                    {loading ? "Creating account..." : "Create account"}
                </button>
            </form>

            {/* Secondary action */}
            <p className="text-center text-sm mt-6 text-gray-600">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="font-medium text-primary hover:underline"
                >
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default Register;
