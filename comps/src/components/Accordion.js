import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    /* const handleClick = () => {
      setExpandedIndex(index);
    }; */

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-400 border-b items-center justify-between cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && <div className="p-5 border-b">{item.content}</div>}
      </div>
    );
  });

  return <div className="m-2 border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
