import React from 'react';

//A simple button component (Yes, it works, logic can be written in an OnClick props)
export function Button() {
    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Test
        </button>
      </div>
    </div>
  );
}