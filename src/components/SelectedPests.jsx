import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SelectedPests = ({ selectedOptions, formOptions }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedPests = formOptions.filter((option) =>
    selectedOptions.includes(option.option)
  );

  return (
    <div className="relative mt-4">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex justify-between items-center w-full px-4 py-3 border border-orange-400 rounded-lg text-orange-500 font-semibold"
      >
        <span>{`(${selectedOptions.length}) pests selected`}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isDropdownOpen && (
        <div className="absolute w-full bg-white border border-slate-200 rounded-lg mt-2 p-4 max-h-40 overflow-y-auto">
          {selectedPests.map((pest) => (
            <div key={pest.id} className="flex items-center gap-2 py-2">
              <img src={pest.image} alt="" className="h-5 w-5" />
              <span className="text-gray-900">{pest.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedPests;
