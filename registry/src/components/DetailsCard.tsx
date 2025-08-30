import type { ReactNode } from "react";

interface DetailsCardProps {
  title: string;
  titleClassName?: string;
  children?: ReactNode;
}

function DetailsCard({ title, titleClassName, children }: DetailsCardProps) {
  return (
    <div>
      <h1 className={`text font-bold ${titleClassName}`}>{title}</h1>
      {children && <div className="p-3 bg-gray-200 rounded">{children}</div>}
    </div>
  );
}

export default DetailsCard;
