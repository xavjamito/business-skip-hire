import React from "react";
import { Skip } from "../types/types";

interface SkipSelectionBarProps {
  selectedSkip: Skip;
  onCancel: () => void;
  onContinue: () => void;
}

const SkipSelectionBar: React.FC<SkipSelectionBarProps> = ({
  selectedSkip,
  onCancel,
  onContinue,
}) => {
  const calculatePriceWithVAT = () => {
    if (selectedSkip.price_before_vat) {
      return (
        selectedSkip.price_before_vat *
        (1 + selectedSkip.vat / 100)
      ).toFixed(2);
    } else if (selectedSkip.transport_cost && selectedSkip.per_tonne_cost) {
      return "Price on request";
    }
    return "N/A";
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50 transition-all duration-300 transform'>
      <div className='max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex flex-col sm:flex-row items-center mb-3 sm:mb-0'>
          <div className='text-sm sm:mr-6 mb-2 sm:mb-0'>
            <span className='font-medium mr-1'>
              {selectedSkip.size} Yard Skip
            </span>
          </div>
          <div className='text-sm sm:mr-6 mb-2 sm:mb-0'>
            <span className='text-gray-400 mr-1'>
              £{calculatePriceWithVAT()}
            </span>
          </div>
          <div className='text-sm'>
            <span className='bg-yellow-600 text-yellow-100 px-3 py-1 rounded-full text-xs'>
              {selectedSkip.hire_period_days} day hire
            </span>
          </div>
        </div>

        <div className='flex space-x-3'>
          <button
            onClick={onCancel}
            className='px-4 py-2 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500'
          >
            Back
          </button>
          <button
            onClick={onContinue}
            className='px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkipSelectionBar;
