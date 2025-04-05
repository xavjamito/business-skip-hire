import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SkipList from "./components/SkipList";
import Footer from "./components/Footer";
import { useSkipData } from "./hooks/useSkipData";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const { skipData, loading, error } = useSkipData();

  return (
    <ThemeProvider>
      <div className='min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200'>
        <Header />
        <Hero />

        <main id='skips' className='py-10'>
          {error && (
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
              <div
                className='bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-800 text-red-700 dark:text-red-200 px-4 py-3 rounded relative'
                role='alert'
              >
                <strong className='font-bold'>Error: </strong>
                <span className='block sm:inline'>{error}</span>
              </div>
            </div>
          )}

          {loading ? (
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center py-20'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400'></div>
            </div>
          ) : (
            <SkipList skips={skipData} />
          )}
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
