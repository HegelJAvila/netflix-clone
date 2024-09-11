import React from 'react'
import './footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio descriptivo</li>
        <li>Centro de ayuda</li>
        <li>Tarjetas de regalo</li>
        <li>Prensa</li>
        <li>Relaciones con inversionistas</li>
        <li>Empleo</li>
        <li>Tienda de Netflix</li>
        <li>Términos de uso</li>
        <li>Privacidad</li>
        <li>Avisos legales</li>
        <li>Preferencias de cookies</li>
        <li>Información corporativa</li>
        <li>Contáctanos</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
