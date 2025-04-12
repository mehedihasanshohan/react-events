import GitHubCalendar from 'react-github-calendar';

export default function GitHubStats() {
  return (
    <div className="p-6 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">My GitHub Contributions</h2>
      <GitHubCalendar username="mehedihasanshohan" colorScheme="light"/>
    </div>
  );
}
