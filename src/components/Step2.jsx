import { useState } from "react";
import { Checkbox } from "@headlessui/react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const formOptions = [
  { id: 1, option: 1, title: "Ants", image: "/ants.svg" },
  { id: 2, option: 2, title: "Beetles", image: "/ants.svg" },
  { id: 3, option: 3, title: "Bees", image: "/ants.svg" },
  { id: 4, option: 4, title: "Ticks", image: "/ants.svg" },
  { id: 5, option: 5, title: "Spiders", image: "/ants.svg" },
  { id: 6, option: 6, title: "Rodents", image: "/ants.svg" },
  { id: 7, option: 7, title: "Cockroaches", image: "/ants.svg" },
  { id: 8, option: 8, title: "Flies", image: "/ants.svg" },
  { id: 9, option: 9, title: "Fleas", image: "/ants.svg" },
  { id: 10, option: 10, title: "Mosquitoes", image: "/ants.svg" },
  { id: 11, option: 11, title: "Moths", image: "/ants.svg" },
  { id: 12, option: 12, title: "Wasps", image: "/ants.svg" },
];

const Step2 = ({ formData, setFormData }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        return prevSelectedOptions.filter((item) => item !== option);
      } else {
        return [...prevSelectedOptions, option];
      }
    });
  };

  const filteredOptions = formOptions
    .filter((option) =>
      option.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 6);

  return (
    <>
      <div className="mb-32">
        <fieldset>
          <legend className="text-xl font-bold">
            Which Pests are bugging you?
          </legend>

          {/* Search input with icon */}
          <div className="mt-4 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for any pest"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 shadow-xs rounded-md focus:outline-none focus:ring-2 focus:ring-tmx-green"
            />
          </div>

          {/* Checkbox options */}
          <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-3 sm:gap-x-4">
            {filteredOptions.map((formOption) => {
              const isSelected = selectedOptions.includes(formOption.option);
              return (
                <div
                  key={formOption.id}
                  onClick={() => handleCheckboxChange(formOption.option)}
                  className={`group relative flex cursor-pointer rounded-md border 
                  ${isSelected ? "border-tmx-green" : "border-slate-200"}
                  bg-white py-7 px-4 shadow-sm focus:outline-none`}
                >
                  <Checkbox
                    checked={isSelected}
                    className="sr-only" // visually hidden for custom styling
                  />
                  <span className="flex flex-1 justify-center items-center">
                    <span className="flex flex-col items-center">
                      <img src={formOption.image} alt="" />
                      <span className="block text-md font-medium text-gray-900">
                        {formOption.title}
                      </span>
                    </span>
                  </span>
                  <div className="absolute top-2 right-2 h-5 w-5">
                    {isSelected && (
                      <CheckCircleIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-tmx-green"
                      />
                    )}
                  </div>
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -inset-px rounded-md 
                    ${isSelected ? "border-tmx-green" : "border-transparent"} 
                    border-2`}
                  />
                </div>
              );
            })}
          </div>
        </fieldset>

        {/* Dropdown with selected options count */}
        <div className="mt-6 relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center py-3 px-4 bg-white border border-slate-200 shadow-sm rounded-md focus:outline-none"
          >
            <span className="text-md font-medium">
              ({selectedOptions.length}) pests selected
            </span>
            <ChevronDownIcon
              className={`h-5 w-5 text-gray-500 transition-transform ${
                isDropdownOpen ? "-rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {isDropdownOpen && (
            <div className="absolute w-full bg-white border border-slate-200 shadow-lg rounded-md mt-2 max-h-48 overflow-y-auto z-10">
              <ul className="p-4">
                {formOptions
                  .filter((option) => selectedOptions.includes(option.option))
                  .map((option) => (
                    <li key={option.id} className="flex items-center space-x-2">
                      <img src={option.image} alt="" className="h-6 w-6" />
                      <span className="text-md font-medium text-gray-900">
                        {option.title}
                      </span>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Step2;
