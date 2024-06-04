import React, { useState } from 'react'
import'./nav.css'
import { Link } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5'
import { IoMdClose } from 'react-icons/io';
function Nav() {
  const [showMenubar, setShowMenubar] = useState(false);

  const toggleMenu = () => {
    setShowMenubar(!showMenubar);
  };
 
   const closeMenuOnMobile = () => {
     if (window.innerWidth <= 1150) {
       setShowMenubar(false);
     }
   };
  return (
    <nav className='nav'>
      <div className='nav-container'>
       <div className='logo'>
        <h2>suresh</h2>
       </div>

      <div className='menu-icon' onClick={toggleMenu} >
      <IoMenuSharp />
      </div>

        <div className= {`menu ${showMenubar ? "show-menu" : ""}`}>

          <ul className='menu-list'>
          <li className='menu-item'>
            <Link className='menu-link' to='/' onClick={closeMenuOnMobile}>Home</Link>
            </li>
          <li className='menu-item'>
            <Link className='menu-link' to='/color'  onClick={closeMenuOnMobile}>Color</Link>
             </li>
           <li className='menu-item'>
            <Link className='menu-link' to='/workoutHome' onClick={closeMenuOnMobile}>WorkoutHome</Link>
            </li>
            <li className='menu-item'>
            <Link className='menu-link' to='/download' onClick={closeMenuOnMobile}>Download</Link>
            </li>
            {/* <li className='menu-item'>
            <Link className='menu-link' to='/games' onClick={closeMenuOnMobile}>Games</Link>
            </li> */}

           
          </ul>
          <div className="menu-close" onClick={toggleMenu}>
                        <IoMdClose />
         </div>
         </div>
        </div>

     </nav>
    
  )
}

export default Nav