"use client"

import React, { useState } from 'react'

export const SnippetDetails = () => {

    const [snippet, setSnippet] = useState({
        id:'wad',
        title:'React Counter Component',
        code:`
            <div className="flex flex-wrap gap-2">
      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm">React</span>
      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">Python</span>
      <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-sm">JavaScript</span>
      <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm">Hooks</span>
    </div>
        `,
        description:'A simple counter component using React Hooks.',
        tags:['react','component'],
        category:"frontend"
    });
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        setIsEditing(true);
      };
    
const handleDelete = ()=>{}
const handleSave = ()=>{}

  return (
    <div className="min-h-screen bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{snippet.title}</h1>
          <div className="space-x-4">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4">{snippet.description || "No description available."}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {snippet.tags?.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Category */}
        <p className="text-sm text-gray-500 mb-6">
          Category: <span className="font-semibold">{snippet.category || "Uncategorized"}</span>
        </p>

        {/* Code Block */}
        <div className="bg-gray-900 text-white rounded-lg p-4 overflow-x-auto">
          {isEditing ? (
            <textarea
              value={snippet.code}
              onChange={(e) => setSnippet({ ...snippet, code: e.target.value })}
              className="w-full h-48 bg-gray-800 text-white p-2 rounded-md focus:outline-none"
            />
          ) : (
            <pre className="text-sm">
              <code>{snippet.code}</code>
            </pre>
          )}
        </div>

        {/* Save Button (Visible in Edit Mode) */}
        {isEditing && (
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  </div>
  )
}
