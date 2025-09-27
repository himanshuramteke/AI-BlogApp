import { Link } from "react-router";

export default function SignupPage() {
  return (
    <div className="text-2xl">
      <Link to="/" className="link link-primary">
        Back
      </Link>
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-md shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
            <form>
              {/* Full Name */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="form-control">
                <button className="btn btn-primary w-full">Sign Up</button>
              </div>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Login link */}
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
