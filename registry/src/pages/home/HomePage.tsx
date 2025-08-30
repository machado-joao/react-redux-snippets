import type { HomeLoaderResult } from "./homeLoader";
import { useLoaderData, Link } from "react-router-dom";

function HomePage() {
  const { featuredPackages } = useLoaderData<HomeLoaderResult>();

  const renderedPackages = featuredPackages.map((pack) => {
    return (
      <div
        className="flex flex-col justify-between gap-3 border rounded shadow p-4"
        key={pack.name}
      >
        <div className="flex flex-col gap-1 border-bottom border-gray-600">
          <div className="font-bold text-center">{pack.name}</div>
          <div className="text-sm text-gray-600">{pack.description}</div>
          <div className="text-sm text-gray-600">
            {pack.maintainers?.length}
          </div>
        </div>
        <Link
          className="border border-gray-600 rounded text-center"
          to={`/packages/${pack.name}`}
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">Registry</h1>
        <p className="mx-auto max-w-[600px] text-gray-600">
          The package manager for JavaScript. Search and view packages.
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
}

export default HomePage;
