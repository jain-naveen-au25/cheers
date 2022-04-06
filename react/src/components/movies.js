import {useState} from 'react'
import React from 'react';
import movies from '../movies'

let Movies=()=>{
  let [movie,setMovie]=useState(movies)
  return(
    <React.Fragment>
      <table >
        <tr>
          <th className="title">Movie Name</th>
          <th>Ratings</th>
          <th>Release Date</th>
        </tr>
      {movie.map((p)=>{return(<tr key={p.id}>
        <td>{p.title}</td>
        <td>{p.ratings}</td>
        <td>{p.release}</td>

      </tr>)})}
      </table>
    </React.Fragment>
  )
}
export default Movies;
