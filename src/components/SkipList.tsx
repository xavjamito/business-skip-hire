import React, { useState } from "react";
import { Skip } from "../types/types";
import SkipCard from "./SkipCard";
import SkipSelectionBar from "./SkipSelectionBar";
import Toast from "./Toast";

interface SkipListProps {
  skips: Skip[];
}

const SkipList: React.FC<SkipListProps> = ({ skips }) => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [filter, setFilter] = useState<{
    allowedOnRoad: boolean | null;
    allowsHeavyWaste: boolean | null;
  }>({
    allowedOnRoad: null,
    allowsHeavyWaste: null,
  });
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "success" as "success" | "error" | "info",
  });

  const handleSkipSelection = (skip: Skip) => {
    setSelectedSkip(skip);
  };

  const handleCancelSelection = () => {
    setSelectedSkip(null);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      setToast({
        isVisible: true,
        message: `Your ${selectedSkip.size} Yard Skip has been successfully selected!`,
        type: "success",
      });
    }
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const filteredSkips = skips.filter((skip) => {
    if (
      filter.allowedOnRoad !== null &&
      skip.allowed_on_road !== filter.allowedOnRoad
    ) {
      return false;
    }
    if (
      filter.allowsHeavyWaste !== null &&
      skip.allows_heavy_waste !== filter.allowsHeavyWaste
    ) {
      return false;
    }
    return true;
  });

  const toggleRoadFilter = () => {
    setFilter((prev) => {
      const current = prev.allowedOnRoad;
      if (current === null) return { ...prev, allowedOnRoad: true };
      if (current === true) return { ...prev, allowedOnRoad: false };
      return { ...prev, allowedOnRoad: null };
    });
  };

  const toggleHeavyWasteFilter = () => {
    setFilter((prev) => {
      const current = prev.allowsHeavyWaste;
      if (current === null) return { ...prev, allowsHeavyWaste: true };
      if (current === true) return { ...prev, allowsHeavyWaste: false };
      return { ...prev, allowsHeavyWaste: null };
    });
  };

  return (
    <div className='py-6'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
          Available Skips
        </h2>

        <div className='mb-8 flex flex-wrap gap-4'>
          <button
            onClick={toggleRoadFilter}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                filter.allowedOnRoad === null
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                  : filter.allowedOnRoad
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                  : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
              }`}
          >
            {filter.allowedOnRoad === null
              ? "Road Placement: Any"
              : filter.allowedOnRoad
              ? "Road Placement: Allowed"
              : "Road Placement: Not Allowed"}
          </button>

          <button
            onClick={toggleHeavyWasteFilter}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                filter.allowsHeavyWaste === null
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                  : filter.allowsHeavyWaste
                  ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                  : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
              }`}
          >
            {filter.allowsHeavyWaste === null
              ? "Heavy Waste: Any"
              : filter.allowsHeavyWaste
              ? "Heavy Waste: Accepted"
              : "Heavy Waste: Not Accepted"}
          </button>
        </div>

        {filteredSkips.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-xl text-gray-600 dark:text-gray-400'>
              No skips match your current filters. Please adjust your criteria.
            </p>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20'>
            {filteredSkips.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                onSelect={handleSkipSelection}
                isSelected={selectedSkip?.id === skip.id}
              />
            ))}
          </div>
        )}
      </div>

      {selectedSkip && (
        <SkipSelectionBar
          selectedSkip={selectedSkip}
          onCancel={handleCancelSelection}
          onContinue={handleContinue}
        />
      )}

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
        duration={3000}
      />
    </div>
  );
};

export default SkipList;
