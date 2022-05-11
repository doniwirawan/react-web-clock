import React, { useState, useEffect } from 'react'
import axios from 'axios'


import Time from './Components/Time'
import Date from './Components/Date'
import Quote from './Components/Quote'
import Joke from './Components/Joke'
import Greet from './Components/Greet'

function App() {
  const [quote, setQuote] = useState([])
  const [joke, setJoke] = useState([])
  const [character, setCharacter] = useState([])
  const [element, setElement] = useState('quote')

  const generateQuote = () => {
    setElement('quote')
    axios.get('https://animechan.vercel.app/api/random')
      .then((res) => {
        console.log(res.data)
        setQuote(res.data.quote)
        setCharacter(res.data.character)
      })

  }
  const generateJoke = () => {
    setElement('joke')
    axios.get('http://api.icndb.com/jokes/random')
      .then((res) => {
        console.log(res.data)
        setJoke(res.data.value.joke)
      })

  }
  const changeToJoke = () => {
    setElement('joke')
  }
  const changeToQuote = () => {
    setElement('quote')
  }


  return (
    <div className='block mt-24 px-4'>
      <Greet/>
      <Time/>
      <Date/>
      {element == 'quote' ? <Quote text={quote} char={character} /> : <Joke text={joke}/>  }
      

      {element == 'quote' ? <button className='bg-sky-500 py-4 px-8  text-center m-auto block mt-5 text-gray-100 hover:text-gray-200 rounded-full hover:bg-sky-700' onClick={generateQuote}>Change Quote</button> : <button className='bg-sky-500 py-4 px-8  text-center m-auto block mt-5 text-gray-100 hover:text-gray-200 rounded-full hover:bg-sky-700' onClick={generateJoke}>Change Jokes</button>}


      {element == 'quote' ? <button className=' py-4 px-8  text-center m-auto block mt-5 text-gray-800 underline underline-offset-1' onClick={changeToJoke}>Change to joke</button> : <button className=' py-4 px-8  text-center m-auto block mt-5 text-gray-800 underline underline-offset-1' onClick={changeToQuote}>Change to Quote</button>}

    </div>
  );
}

export default App;
