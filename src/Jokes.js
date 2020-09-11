import React, { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';


const Jokes = (props) => {
  const [hasError, setErrors] = useState(false);
  const [Joke, setJoke] = useState({});





  async function fetchData() {
    let fetchURL = "https://api.chucknorris.io/jokes/random"

    if (props.category !== ""){
      fetchURL = "https://api.chucknorris.io/jokes/random?category=" + props.category
    }
   
    const res = await fetch(fetchURL);
    res
      .json()
      .then(res => setJoke(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
     
      <IconButton aria-label="C.Norris" 
      onClick={() => { fetchData() }}>
        <img src='https://assets.chucknorris.host/img/avatar/chuck-norris.png'/>
      </IconButton>

      


      <div style={{maxWidth:600}}>{(Joke.value)}</div>
  
    </div>
  );
};
export default Jokes;
