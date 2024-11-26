import React from 'react'

const Style02 = () => {
  return (
    <>
      <h1 id='style02' className='flex h-32 mt-4 items-center justify-center text-black font-bold text-3xl bg-cover bg-gradient-to-t from-red-700 via-rose-600 to-pink-500 bg-center p-4 mb-10'>
        Style 2 Grid
      </h1>

      <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        
        <div className="grid gap-4">
          <div className="h-60 min-h-[240px] bg-gradient-to-r from-blue-300 via-blue-600 to-blue-700 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 1</p>
          </div>

          <div className="h-72 min-h-[288px] bg-gradient-to-r from-green-200 via-green-500 to-green-600 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 2</p>
          </div>

          <div className="h-48 min-h-[192px] bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 3</p>
          </div>
          
          <div className="h-60 min-h-[240px] bg-gradient-to-r from-teal-500 to-teal-700 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 4 </p>
          </div>

        </div>

        <div className="grid gap-4">
          <div className="h-56 min-h-[224px] bg-gradient-to-r from-red-500 to-red-800 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 5</p>
          </div>
          <div className="h-64 min-h-[256px] bg-gradient-to-r from-purple-500 via-purple-600 to-purple-900 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 6</p>
          </div>
          <div className="h-80 min-h-[320px] bg-gradient-to-r from-pink-600 to-pink-900 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 7</p>
          </div>
          {/* Added new grid item */}
          <div className="h-56 min-h-[224px] bg-gradient-to-r from-indigo-600 to-indigo-900 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 8</p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="h-72 min-h-[288px] bg-gradient-to-r from-orange-500 to-orange-800 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 9</p>
          </div>
          <div className="h-56 min-h-[224px] bg-gradient-to-r from-teal-500 to-teal-900 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 10</p>
          </div>
          <div className="h-64 min-h-[256px] bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 11</p>
          </div>
          {/* Added new grid item */}
          <div className="h-80 min-h-[320px] bg-gradient-to-r from-gray-500 to-gray-800 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 12 </p>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="h-60 min-h-[240px] bg-gradient-to-r from-cyan-500 to-cyan-800 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 13</p>
          </div>
          <div className="h-80 min-h-[320px] bg-gradient-to-r from-gray-500 to-gray-900 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 14</p>
          </div>
          <div className="h-56 min-h-[224px] bg-gradient-to-r from-lime-400 to-lime-800 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 15</p>
          </div>
          {/* Added new grid item */}
          <div className="h-60 min-h-[240px] bg-gradient-to-r from-yellow-600 to-yellow-800 rounded-lg p-4 flex items-center justify-center">
            <p className="text-white">Style 16 </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Style02
