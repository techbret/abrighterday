import React from 'react'

export default function NeedToTalk() {
  return (
    <div className="bg-blue-900">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block text-amber-400">Need To Talk?</span>
        <span className="block text-white">Text <span className='text-amber-400'>"BRIGHTER"</span> to <span>741741</span></span>
      </h2>
      <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-blue-700"
          >
            Resources
          </a>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50"
          >
            Reach Out
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}
