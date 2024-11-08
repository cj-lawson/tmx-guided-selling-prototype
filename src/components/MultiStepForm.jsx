import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Sticky from "./Sticky";

const multiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const steps = [
    <Step1 formData={formData} setFormData={setFormData} />,
    <Step2 formData={formData} setFormData={setFormData} />,
    <Step3 formData={formData} setFormData={setFormData} />,
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
  };

  return (
    <>
      <div className="h-full pt-4 px-5 overflow-y-scroll">
        {currentStep > 1 && (
          <button onClick={handleBack} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="size-5"
            >
              <path
                fill-rule="evenodd"
                d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                clip-rule="evenodd"
              />
            </svg>
            Back
          </button>
        )}
        <div className="mt-8">{steps[currentStep - 1]}</div>
      </div>

      {/* Sticky footer */}
      <Sticky
        currentStep={currentStep}
        steps={steps}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default multiStepForm;
