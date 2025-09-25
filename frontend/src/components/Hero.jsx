export default function AIBlogHero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 border border-base-300 rounded-full px-4 py-2 mb-8 bg-base-100/50">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-base-content">
              AI-Powered
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your own <span className="text-primary">blogging</span> platform.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl mb-8 text-base-content/80 max-w-2xl mx-auto">
            Our AI creates engaging blog posts about any topic in seconds
          </p>

          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="join w-full">
              <div className="relative flex-1">
                <input
                  type="search"
                  placeholder="Enter a topic..."
                  className="input input-bordered join-item w-full pr-10"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button className="btn btn-primary join-item px-8">
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
