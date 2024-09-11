import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    type: "",
    published_at: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzBjYjVhY2FlZmIwNjI1YjIyMTllMmJjYjk3NjE4MSIsIm5iZiI6MTcyMzEzOTg2OC40OTQ5OCwic3ViIjoiNjIxNThmNDg5ZjVkZmIwMDQxNGViOTM1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ryYiOqlW0q3OazdewF4oOXOOwPEeBaram204BcbwRMQ'
    }
  };
  
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-MX`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));

  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => {navigate(-1)}}/>
      <iframe width='91%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player 