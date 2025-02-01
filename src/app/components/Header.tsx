import React from 'react'

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">CodeVault</h1>
      <nav className="flex space-x-4">
        <a href="signup" className="hover:text-blue-200">Home</a>
        <a href="#" className="hover:text-blue-200">Snippets</a>
        <a href="#" className="hover:text-blue-200">Favorites</a>
        <a href="#" className="hover:text-blue-200">Profile</a>
      </nav>
    </div>
  </header>
  )
}
