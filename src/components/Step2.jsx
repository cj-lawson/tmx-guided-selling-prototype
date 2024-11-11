import { useState } from "react";
import { Checkbox } from "@headlessui/react";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const Step2 = ({
  formData,
  setFormData,
  selectedOptions,
  setSelectedOptions,
  formOptions,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

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
              className="w-full pl-10 pr-4 py-3 border border-[#e0e0e0] rounded-md focus:outline-none focus:ring-2 focus:ring-tmx-green"
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
                  ${isSelected ? "border-tmx-green" : "border-[#e0e0e0]"}
                  bg-white py-7 px-4 focus:outline-none`}
                >
                  <Checkbox
                    checked={isSelected}
                    className="sr-only" // visually hidden for custom styling
                  />
                  <span className="flex flex-1 justify-center items-center">
                    <span className="flex flex-col items-center">
                      <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center">
                        <img src={formOption.image} alt="" className="h-6" />
                      </div>
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
      </div>
    </>
  );
};

export default Step2;
