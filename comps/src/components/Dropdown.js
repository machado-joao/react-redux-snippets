import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, selectedOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      /* console.log(event.target);
      console.log(divElement.current); */
      if (!divElement.current) {
        return;
      } // If the reference was not assigned, then return early

      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    }; // This function will be called whenever the dropdown is removed from the screen (it works only with an empty array as deps)
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen); // !isOpen is technically correct as well
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divElement} className="m-3 w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {selectedOption?.label || "Select option"}
        {isOpen ? (
          <GoChevronUp className="text-lg" />
        ) : (
          <GoChevronDown className="text-lg" />
        )}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;
