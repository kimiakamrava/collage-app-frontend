import React, {useEffect, useState} from 'react';

import './Painting.css';
import Art from './components/Art';
import Spinner from './Spinner/Spinner';
import useSpinner from './Spinner/useSpinner';
import PaletteTwoToneIcon from '@material-ui/icons/PaletteTwoTone';
import { Link } from "react-router-dom";



const Painting = () => {


  const [art, setArt] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('moon');
  const [spinner, showSpinner, hideSpinner] = useSpinner()
 
  useEffect(() => {
    getArt();
  }, [query])  
  const getArt = () => {
    showSpinner();
    setTimeout(() => hideSpinner(), 1000)
    fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=' + query)
    .then(response => response.json())
  
    .then(fullResponse => {
      let ids = fullResponse.objectIDs  //array of ids
      if (ids.length < 50) {
      let collection = ids.map(id => 
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + id)
        .then(response => response.json()))
      Promise.all(collection).then(results => {
        setArt(results)
        // console.log(titles)
      })
      } else {
        alert("Please narrow down your search!")
        return
      }
    })
  
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    showSpinner();
   
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
       <nav className="nav">
       <Link to='/palettes'><PaletteTwoToneIcon style={{fill:"white"}}/></Link>
       <h1>let's Explore some colors from the bests</h1>
       </nav>
      <div className="form-container">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="ie. moon" />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
      <div className="hero">
        {spinner}
        <h1>Color Adventure in the museum for <span className="query">{query} - </span></h1>
      </div>
      <div className="main-container">
        <br/>
      
      <div className="art-list">
        {art.map(a => (
          <Art 
            key={a.objectID} 
            title={a.title} 
            image={a.primaryImage} 
            date={a.objectDate}
            country={a.country}
            department={a.department}
            artistRole={a.artistRole}
            artistName={a.artistDisplayName}
            medium={a.medium}
            dimensions={a.dimensions}
            objectURL={a.objectURL}
          />
        )
      )}
      </div>
      </div>
   
      <footer>
        
      </footer>
    </div>
  
  );
}


export default Painting;
