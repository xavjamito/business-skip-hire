import React from "react";

const Hero: React.FC = () => {
  return (
    <div className='relative bg-blue-700 dark:bg-blue-900'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 dark:from-blue-900 dark:to-black opacity-90 mix-blend-multiply'></div>
      </div>
      <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          Skip Hire Made Simple
        </h1>
        <p className='mt-6 max-w-3xl text-xl text-blue-100'>
          Find the perfect skip for your waste management needs. We offer a
          range of sizes for residential and commercial projects with affordable
          pricing and reliable service.
        </p>

        <div className='mt-10'>
          <div className='mt-3 rounded-md shadow sm:mt-0 sm:flex'>
            <div className='rounded-md shadow'>
              <a
                href='#skips'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10'
              >
                View Skip Options
              </a>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a
                href='#contact'
                className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 md:py-4 md:text-lg md:px-10'
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
