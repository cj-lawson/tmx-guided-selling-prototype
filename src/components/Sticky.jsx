import { useState } from "react";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

const Sticky = ({
  currentStep,
  steps,
  handleNext,
  handleSubmit,
  selectedOptions,
  formOptions,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <footer className="sticky bottom-0 pb-10 pt-2 border-t border-slate-200 z-100 bg-white">
        {/* Only render dropdown button if there are selected options */}
        {selectedOptions.length > 0 && (
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center py-3 px-4 bg-white rounded-md focus:outline-none"
            >
              <div className="pl-5">
                <span className="text-md font-medium pr-1 text-tmx-green animate-slide-in">
                  ({selectedOptions.length})
                </span>
                <span className="text-md font-medium animate-slide-in">
                  pests selected
                </span>
              </div>
              <div className="pr-5">
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    isDropdownOpen ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full bg-white shadow-t-lg border-t border-slate-200 bottom-full px-5 max-h-48 overflow-y-auto z-10 animate-slide-in">
                <ul className="p-4">
                  {formOptions
                    .filter((option) => selectedOptions.includes(option.option))
                    .map((option) => (
                      <li key={option.id} className="flex pb-4">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex">
                            <img
                              src={option.image}
                              alt=""
                              className="h-6 w-6"
                            />
                            <span className="text-md font-medium text-gray-900 ml-2">
                              {option.title}
                            </span>
                          </div>

                          <CheckCircleIcon
                            aria-hidden="true"
                            className="h-5 w-5 text-tmx-green"
                          />
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="px-5">
          {currentStep < steps.length ? (
            <>
              {/* Next button */}
              <button
                onClick={handleNext}
                className="bg-[#facc15] px-2 py-4 w-full mt-4 rounded-full font-semibold"
              >
                NEXT
              </button>
            </>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-green-500 px-2 py-4 w-full rounded-full font-semibold text-white"
            >
              Submit
            </button>
          )}
        </div>
      </footer>
    </>
  );
};

export default Sticky;
