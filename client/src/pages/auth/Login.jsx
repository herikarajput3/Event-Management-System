import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await login(form);
            navigate("/");
        } catch (err) {
            console.log("Login error", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            {/* Heading section */}
            <div className="text-center mb-8 space-y-2">
                <h1 className="text-2xl font-semibold text-neutral">
                    Welcome back 👋
                </h1>
                <p className="text-sm text-gray-500">
                    Sign in to your account to continue
                </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                        placeholder="••••••••"
                        className="input input-bordered h-11 w-full focus:outline-none focus:border-primary"
                    />
                </div>

                {/* Forgot password */}
                {/* <div className="text-right">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-primary hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div> */}

                {error && (
                    <p className="text-sm text-error">{error}</p>
                )}

                {/* Primary action */}
                <button
                    type="submit"
                    className="btn btn-primary w-full h-11 text-base font-medium"
                >
                    {loading ? "Logging in..." : "Log in"}
                </button>
            </form>

            {/* Secondary action */}
            <p className="text-center text-sm mt-6 text-gray-600">
                Don’t have an account?{" "}
                <Link
                    to="/register"
                    className="font-medium text-primary hover:underline"
                >
                    Create one
                </Link>
            </p>
        </div>
    );
};

export default Login;
