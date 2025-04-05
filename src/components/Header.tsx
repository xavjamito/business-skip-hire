import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className='bg-white dark:bg-gray-800 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <h1 className='text-2xl font-bold text-blue-600 dark:text-blue-400'>
              Business Skip Hire
            </h1>
          </div>

          <nav className='hidden md:flex space-x-8'>
            <a
              href='#'
              className='text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
            >
              Home
            </a>
            <a
              href='#'
              className='text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
            >
              About
            </a>
            <a
              href='#'
              className='text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
            >
              Skips
            </a>
            <a
              href='#'
              className='text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
            >
              Contact
            </a>
          </nav>

          <div className='flex items-center'>
            <ThemeToggle />

            <button className='ml-4 md:hidden focus:outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-gray-700 dark:text-gray-200'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='hidden md:hidden'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            Home
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            About
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            Skips
          </a>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
