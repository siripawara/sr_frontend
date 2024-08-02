import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faPhone ,faFax,faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='footer' id="footer">
      <div className='left'>
        <h3>SR Recuiters and Travellers</h3>
        <span>Copyright © 2024 sr.</span>
      </div>
      <div className='right'>
        <div><FontAwesomeIcon icon={faLocationDot} /> No 134 Bauddaloka Mawatha, Gampaha</div>
        <div><FontAwesomeIcon icon={faPhone} />033 4938077 / 0777 585058</div>
        <div><FontAwesomeIcon icon={faFax} /> 033 4938077 </div>
        <div><FontAwesomeIcon icon={faEnvelope} />srjapan17949@gmail.com</div>
      </div>
    </div>
  )
}

export default Footer