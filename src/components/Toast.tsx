import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  isVisible,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-600 text-white";
      case "error":
        return "bg-red-600 text-white";
      case "info":
        return "bg-blue-600 text-white";
      default:
        return "bg-green-600 text-white";
    }
  };

  return (
    <div className='fixed top-4 right-4 z-50'>
      <div
        className={`rounded-lg shadow-lg p-4 max-w-sm flex items-center ${getToastStyles()}`}
      >
        {type === "success" && (
          <svg
            className='w-6 h-6 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
        )}
        {type === "error" && (
          <svg
            className='w-6 h-6 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
        {type === "info" && (
          <svg
            className='w-6 h-6 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        )}
        <span>{message}</span>
        <button
          onClick={onClose}
          className='ml-auto text-white hover:text-gray-200 focus:outline-none'
        >
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
