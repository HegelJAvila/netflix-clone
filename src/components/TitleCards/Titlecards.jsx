import React, { useEffect, useRef, useState } from 'react'
import './titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

const Titlecards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBjYjVhY2FlZmIwNjI1YjIyMTllMmJjYjk3NjE4MSIsIm5iZiI6MTcyMzEzOTg2OC40OTQ5OCwic3ViIjoiNjIxNThmNDg5ZjVkZmIwMDQxNGViOTM1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ryYiOqlW0q3OazdewF4oOXOOwPEeBaram204BcbwRMQ'
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect( () => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=es-MX&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className='titleCards'>
      <h2>{title?title:"Popular en Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map( (card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.title}</p>
          </Link>
        })}
        </div>
    </div>
  )
}

export default Titlecards
