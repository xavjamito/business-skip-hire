import React from "react";
import { Skip } from "../types/types";

interface SkipCardProps {
  skip: Skip;
  onSelect: (skip: Skip) => void;
  isSelected: boolean;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect, isSelected }) => {
  const calculatePriceWithVAT = () => {
    if (skip.price_before_vat) {
      return (skip.price_before_vat * (1 + skip.vat / 100)).toFixed(2);
    } else if (skip.transport_cost && skip.per_tonne_cost) {
      return "Price on request";
    }
    return "N/A";
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all hover:shadow-lg cursor-pointer border ${
        isSelected
          ? "border-blue-500 ring-2 ring-blue-500"
          : "border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className='flex justify-between items-start mb-4'>
        <h3 className='text-xl font-bold text-gray-800 dark:text-white'>
          {skip.size} Yard Skip
        </h3>
        <span className='px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 rounded-full text-sm font-medium'>
          {skip.hire_period_days} days
        </span>
      </div>

      <div className='mb-4 flex justify-center'>
        <img
          src='/default_img.jpg'
          alt={`${skip.size} Yard Skip`}
          className='w-full h-48 object-cover rounded-md'
        />
      </div>

      <div className='space-y-2 mb-4'>
        <div className='flex justify-between'>
          <span className='text-gray-600 dark:text-gray-300'>
            Road Placement:
          </span>
          <span
            className={`font-medium ${
              skip.allowed_on_road
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {skip.allowed_on_road ? "Allowed" : "Not Allowed"}
          </span>
        </div>
        <div className='flex justify-between'>
          <span className='text-gray-600 dark:text-gray-300'>Heavy Waste:</span>
          <span
            className={`font-medium ${
              skip.allows_heavy_waste
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {skip.allows_heavy_waste ? "Accepted" : "Not Accepted"}
          </span>
        </div>
      </div>

      <div className='mt-4 pt-4 border-t border-gray-200 dark:border-gray-700'>
        {skip.price_before_vat ? (
          <>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-gray-600 dark:text-gray-300'>
                Price (excl. VAT):
              </span>
              <span className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                £{skip.price_before_vat.toFixed(2)}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-gray-600 dark:text-gray-300'>
                VAT ({skip.vat}%):
              </span>
              <span className='text-lg font-medium text-gray-800 dark:text-gray-200'>
                £{((skip.price_before_vat * skip.vat) / 100).toFixed(2)}
              </span>
            </div>
            <div className='flex justify-between items-center mt-3 pt-3 border-t border-gray-200 dark:border-gray-700'>
              <span className='text-gray-600 dark:text-gray-300 font-medium'>
                Total Price:
              </span>
              <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                £{calculatePriceWithVAT()}
              </span>
            </div>
          </>
        ) : (
          <div className='flex justify-between items-center'>
            <span className='text-gray-600 dark:text-gray-300'>Price:</span>
            <span className='text-2xl font-bold text-gray-900 dark:text-white'>
              Price on request
            </span>
          </div>
        )}
      </div>

      <button
        onClick={() => onSelect(skip)}
        className={`w-full mt-4 py-2 px-4 rounded-lg transition-colors duration-200 font-medium ${
          isSelected
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
      >
        {isSelected ? "Selected" : "Select This Skip"}
      </button>
    </div>
  );
};

export default SkipCard;
