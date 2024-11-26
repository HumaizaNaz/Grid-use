import React from 'react'

const Style03 = () => {
  return (
    <>
      <h1 
        id="style03" 
        className="flex h-32 mt-4 items-center justify-center text-black font-bold text-3xl bg-cover bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 bg-center p-4 mb-10"
      >
        Style 03 Grid
      </h1>
      
      <div className="grid gap-4" >
        {/* Main Image Container*/}
        <div className="h-96 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-lg p-4 flex items-center justify-center">
          <p className="text-white font-bold text-xl">Style 01</p>
        </div>

        {/* Nested Grid */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4" 
    
        >
          <div className="h-64 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white font-bold text-xl">Style 02</p>
          </div>
          <div className="h-64 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white font-bold text-xl">Style 03</p>
          </div>
          <div className="h-64 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white font-bold text-xl">Style 04</p>
          </div>
          <div className="h-64 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white font-bold text-xl">Style 05</p>
          </div>
          <div className="h-64 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white font-bold text-xl">Style 06</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Style03