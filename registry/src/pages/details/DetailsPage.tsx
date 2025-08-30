import type { DetailsLoaderResult } from "./detailsLoader";
import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard";

function DetailsPage() {
  const { details } = useLoaderData<DetailsLoaderResult>();

  return (
    <div className="space-y-4">
      <DetailsCard title={details.name} titleClassName="text-3xl my-4" />
      <DetailsCard title="Description">{details.description}</DetailsCard>
      <DetailsCard title="License">{details.license}</DetailsCard>
      <DetailsCard title="Author">
        {details.author?.name ?? "No author"}
      </DetailsCard>
      <DetailsCard title="Maintainers">
        {details.maintainers?.map((maintainer) => {
          return (
            <p>
              {maintainer.name} - {maintainer.email}
            </p>
          );
        }) ?? "No maintainers"}
      </DetailsCard>
    </div>
  );
}

export default DetailsPage;
