import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

const formOptions = [
  { id: 1, option: 1, title: "I have a current pest problem" },
  { id: 2, option: 2, title: "I am just browsing" },
];

const Step1 = ({ formData, setFormData }) => {
  const [selectedOption, setSelectedOption] = useState(formOptions[0]);

  return (
    <div>
      <fieldset>
        <legend className="text-xl font-bold">
          What brings you here today?
        </legend>

        <RadioGroup
          value={selectedOption}
          onChange={setSelectedOption}
          className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4"
        >
          {formOptions.map((formOption) => (
            <Radio
              key={formOption.id}
              value={formOption.option}
              className="group relative flex cursor-pointer rounded-md border border-slate-200 bg-white py-7 px-4 shadow-sm focus:outline-none data-[focus]:border-tmx-green data-[focus]:ring-2 data-[focus]:ring-indigo-600"
            >
              <span className="flex flex-1">
                <span className="flex flex-col">
                  <span className="block text-lg font-medium text-gray-900">
                    {formOption.title}
                  </span>
                </span>
              </span>
              <CheckCircleIcon
                aria-hidden="true"
                className="h-5 w-5 text-tmx-green [.group:not([data-checked])_&]:invisible"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-tmx-green"
              />
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  );
};

export default Step1;
