import { Link } from "react-router-dom";

const Login = () => {
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
            <form className="space-y-5">
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="label pb-0">
                        <span className="label-text text-sm font-medium">
                            Email
                        </span>
                    </label>
                    <input
                        type="email"
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
                        placeholder="••••••••"
                        className="input input-bordered h-11 w-full focus:outline-none focus:border-primary"
                    />
                </div>

                {/* Forgot password */}
                <div className="text-right">
                    <Link
                        to="/forgot-password"
                        className="text-sm text-primary hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>

                {/* Primary action */}
                <button
                    type="submit"
                    className="btn btn-primary w-full h-11 text-base font-medium"
                >
                    Login
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
