import React from 'react'
import './header.css'
import { User } from 'lucide-react'
import ThemeToggle from '../ThemeToggle'
export default function Header() {
  return (
         <nav >
          <div className="logo">logo</div>
        
          <div className="links">
       <a href="/">Home</a> 
        <a href="/settings">settings</a>
        <a href="/about">about</a>
        </div>
     <div className="icons">
      
    <ThemeToggle />
        <a href="/register">
      <User/>
        </a>

     </div>
      </nav>
  )
}
