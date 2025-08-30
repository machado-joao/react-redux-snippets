import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse {
  objects: {
    package: {
      name: string;
      version: string;
      description: string;
      keywords: string[];
    };
  }[];
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const response = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );
  const data: SearchResponse = await response.json();

  return data.objects.map((searchResult) => {
    return {
      name: searchResult.package.name,
      version: searchResult.package.version,
      description: searchResult.package.description,
      keywords: searchResult.package.keywords,
    };
  });
}
