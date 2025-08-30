import PackageListItem from "../../components/PackageListItem";
import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";

function SearchPage() {
  const { searchResults } = useLoaderData<SearchLoaderResult>();

  const renderedResults = searchResults.map((result) => {
    return <PackageListItem key={result.name} pack={result} />;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search results</h1>
      <div className="space-y-4 mt-4">{renderedResults}</div>
    </div>
  );
}

export default SearchPage;
