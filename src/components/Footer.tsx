import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 dark:bg-gray-900' id='contact'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h3 className='text-lg font-semibold text-white'>
              Business Skip Hire
            </h3>
            <p className='mt-4 text-base text-gray-300'>
              Professional skip hire services for both residential and
              commercial projects.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white'>Contact Us</h3>
            <ul className='mt-4 space-y-2'>
              <li className='text-gray-300'>
                <span className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-2 text-blue-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  01234 567890
                </span>
              </li>
              <li className='text-gray-300'>
                <span className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-2 text-blue-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                  info@businessskiphire.com
                </span>
              </li>
              <li className='text-gray-300'>
                <span className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 mr-2 text-blue-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  123 Business Street, London, UK
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white'>Quick Links</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='text-gray-300 hover:text-blue-400'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-blue-400'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#skips' className='text-gray-300 hover:text-blue-400'>
                  Skip Options
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-blue-400'>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-300 hover:text-blue-400'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t border-gray-700'>
          <p className='text-base text-gray-400 text-center'>
            &copy; {new Date().getFullYear()} Business Skip Hire. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
