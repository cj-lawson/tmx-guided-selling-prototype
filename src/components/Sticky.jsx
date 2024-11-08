const Sticky = ({ currentStep, steps, handleNext, handleSubmit }) => {
  return (
    <footer className="sticky bottom-0 px-5 py-6 border-t border-slate-200 z-100 bg-white">
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
    </footer>
  );
};

export default Sticky;
