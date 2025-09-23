import React, { useState, useEffect } from "react";

export default function AIBlogHero() {
  const [currentTopic, setCurrentTopic] = useState(0);

  const topics = ["Technology", "Business", "Health", "Science", "Travel"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % topics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">AI-Powered</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Turn Any Topic into Articles
          </h1>

          {/* Description with dynamic topic */}
          <p className="text-xl mb-8">
            Our AI creates engaging blog posts about
            <span className="inline-block mx-2 px-3 py-1 border rounded-lg font-semibold min-w-[100px]">
              {topics[currentTopic]}
            </span>
            in seconds
          </p>

          {/* CTA Button */}
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
