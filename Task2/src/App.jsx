import { useState } from 'react'
import './App.css'

function App() {
  return (
    <header>
      <nav className='w-full h-14 flex justify-end items-center fixed z-10'>
        <ul className='default-menu w-full h-14 flex justify-end items-center'>
          <li><img className='h-14 p-1 rounded-lg' src='public/images/logo.png'/><p className='inline text-black'>Sphiwe Nyoni</p></li>
          <li><a href='about'>About</a></li>
          <li><a href='skills'>Skills</a></li>
          <li><a href='projects'>Projects</a></li>
          <li><a href='contact'>Contact</a></li>
          <li><img className='h-10 pr-2.5 pl-2.5' src='public/images/Icons/menu.svg'/></li>
        </ul>
      </nav>
    </header>
  )
}

export default App
