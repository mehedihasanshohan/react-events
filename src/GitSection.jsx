import React from 'react';

const GitHubSection = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-8 lg:px-16" id="github">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        My GitHub Highlights 🚀
      </h2>

      <div className="flex flex-col items-center gap-10">

        {/* GitHub Stats */}
        <img
          src="https://github-readme-stats.vercel.app/api?username=mhsohaan23&show_icons=true&theme=default"
          alt="GitHub Stats"
          className="w-full max-w-2xl rounded-lg shadow"
        />

        {/* Top Languages */}
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=mhsohaan23&layout=compact&theme=default"
          alt="Top Languages"
          className="w-full max-w-md rounded-lg shadow"
        />

        {/* GitHub Streak */}
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=mhsohaan23&theme=default"
          alt="GitHub Streak"
          className="w-full max-w-2xl rounded-lg shadow"
        />

        {/* Contribution Heatmap */}
        <img
          src="https://ghchart.rshah.org/mhsohaan23"
          alt="GitHub chart"
          className="w-full max-w-xl rounded-lg shadow"
        />

        {/* GitHub Trophies */}
        <img
          src="https://github-profile-trophy.vercel.app/?username=mhsohaan23&theme=flat&margin-w=10"
          alt="GitHub Trophies"
          className="w-full max-w-3xl rounded-lg shadow"
        />

        {/* Metrics Dashboard */}
        <img
          src="https://github-metrics.vercel.app/api?username=mhsohaan23"
          alt="GitHub Metrics"
          className="w-full max-w-3xl rounded-lg shadow"
        />
      </div>
    </section>
  );
};

export default GitHubSection;
