import React, { useState, useEffect } from 'react'
import axios from 'axios'


import Time from './Components/Time'
import Date from './Components/Date'
import Quote from './Components/Quote'
import Joke from './Components/Joke'
import Greet from './Components/Greet'

function App() {
  const [quote, setQuote] = useState([])
  const [character, setCharacter] = useState([])

  const generateQuote = () => {
    axios.get('https://animechan.vercel.app/api/random')
      .then((res) => {
        console.log(res.data)
        setQuote(res.data.quote)
        setCharacter(res.data.character)
      })

  }


  return (
    <div className='block mt-24 px-4'>
      <Greet/>
      <Time/>
      <Date/>
      <Quote text={quote} char={character}/>
      {/* <Joke/> */}
      <button className='bg-sky-500 py-4 px-8  text-center m-auto block mt-5 text-gray-100 hover:text-gray-200 rounded-full hover:bg-sky-700' onClick={generateQuote}>Change Quote</button>


    </div>
  );
}

export default App;
