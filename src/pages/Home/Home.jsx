import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/TitleCards/Titlecards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Un joven habitante de la moderna Estambul descubre sus lazos con una antigua orden secreta y se dispone a salvar a su ciudad de un enemigo inmortal.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Reproducir</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />Más información</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
        <Titlecards title={"Lo Nuevo en Netflix"} category={"now_playing"}/>
        <Titlecards title={"Populares"} category={"popular"}/>
        <Titlecards title={"Lo más visto"} category={"top_rated"}/>
        <Titlecards title={"Próximamente"} category={"upcoming"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
