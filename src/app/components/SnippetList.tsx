'use client'
 
import { useRouter } from 'next/navigation'

export const SnippetList = () => {
    const router = useRouter()
  return (
    <div className="space-y-4">
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">React Counter Component</h3>
      <p className="text-sm text-gray-600">A simple counter component using React Hooks.</p>
      <div className="mt-2 flex space-x-2">
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">React</span>
        <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs">Hooks</span>
      </div>
      <button className="mt-2 text-blue-600 hover:text-blue-800" onClick={() => router.push('/details')}>View Details</button>
    </div>
    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">Python Fibonacci Function</h3>
      <p className="text-sm text-gray-600">A recursive function to calculate Fibonacci numbers.</p>
      <div className="mt-2 flex space-x-2">
        <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">Python</span>
        <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs">Recursion</span>
      </div>
      <button className="mt-2 text-blue-600 hover:text-blue-800">View Details</button>
    </div>
  </div>
  )
}
