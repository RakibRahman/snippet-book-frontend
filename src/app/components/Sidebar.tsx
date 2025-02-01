import React from 'react'

export const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-white rounded-lg shadow-md p-4">
    <h2 className="text-lg font-semibold mb-4">Categories</h2>
    <ul className="space-y-2">
      <li><a href="#" className="block text-blue-600 hover:text-blue-800">Frontend</a></li>
      <li><a href="#" className="block text-blue-600 hover:text-blue-800">Backend</a></li>
      <li><a href="#" className="block text-blue-600 hover:text-blue-800">Algorithms</a></li>
      <li><a href="#" className="block text-blue-600 hover:text-blue-800">Utilities</a></li>
    </ul>
    <h2 className="text-lg font-semibold mt-6 mb-4">Tags</h2>
    <div className="flex flex-wrap gap-2">
      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">React</span>
      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Python</span>
      <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">JavaScript</span>
      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm">Hooks</span>
    </div>
  </aside>
  )
}
