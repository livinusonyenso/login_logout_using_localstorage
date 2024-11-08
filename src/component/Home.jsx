import React from 'react'

export default function Home({handleLogOut}) {
  
  const handleDeleté = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>
    <h1>Welcome  {localStorage.getItem("name")}</h1>
    <button
            type='submit'
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-50"
            onClick={handleLogOut}
          >
            Logout
          </button>
    <button
            type='submit'
            className="bg-red-500 hover:bg-red-700 text-white font-bold mt-5 py-2 px-4 rounded w-50"
            onClick={handleDeleté}
          >
            Delete
          </button>
    
    </>
    
  )
}
