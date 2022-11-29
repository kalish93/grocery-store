import { useState, React} from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavBar.css'
function NavBar() {

  const [isMobile, setIsMobile] = useState(false)

  return (
    <nav className='nav--bar'>
        <div className='logo'>
            <Link to='/'>&#127818;rgan&#127794;c</Link>
        </div>
        
        <div>
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={()=>setIsMobile(false)}>
            <li className='nav--links'><Link to="/">Home</Link></li>
            <li className='nav--links'><Link to='/products'>Products</Link></li>
            <li className='nav--links'><Link to='/about'>About</Link></li>
            <li className='nav--links'><Link to='/contact'>Contact</Link></li>
            
        </ul>
        </div>
        
        <button className='mobile-menu-icon' onClick={()=>{
          return setIsMobile(!isMobile)
        }}>{isMobile? <FaTimes size='30px'/> : <FaBars size='30px'/>}</button>
    </nav>
  )
}

export default NavBar