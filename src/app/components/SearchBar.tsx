import React from 'react'

export const SearchBar = () => {
  return (
    <div className="mb-6">
    <input
      type="text"
      placeholder="Search snippets..."
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    />
  </div>
  )
}
