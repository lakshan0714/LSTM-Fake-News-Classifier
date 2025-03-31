import React from 'react'
import { asset } from '../Assets/asset'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell} from '@fortawesome/free-regular-svg-icons'
import { faQuestion} from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={asset.logo} alt="" className="logo" />
        </div>
        <div className="page">
            <span >Home </span>
            <span>About us</span>
        </div>
        <div className="IconAvatar">
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faQuestion} />
        <img src={asset.avatar} alt="" className="avatar" />
        </div>
    </div>
  )
}

export default Navbar
