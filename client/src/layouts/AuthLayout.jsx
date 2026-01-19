import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">

            <div className="card w-full max-w-md shadow-lg bg-base-100">
                <div className="card-body">

                    <Outlet />

                </div>
            </div>

        </div>
    );
};

export default AuthLayout;
