import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">MW</h1>
        <ul className="flex gap-8 text-lg">
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar