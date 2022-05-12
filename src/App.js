import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet, HelmetData, HelmetProvider } from 'react-helmet-async';

import Time from './Components/Time'
import Date from './Components/Date'
import Quote from './Components/Quote'
import Joke from './Components/Joke'
import Greet from './Components/Greet'
import Note from './Components/Note'

function App() {
  const [quote, setQuote] = useState()
  const [joke, setJoke] = useState()
  const [character, setCharacter] = useState()
  const [element, setElement] = useState('quote')

  useEffect(() => {
    axios.get('https://animechan.vercel.app/api/random')
      .then((res) => {
        setQuote(res.data.quote)
        setCharacter(res.data.character)
      })

  }, [])

  useEffect(() => {
    axios.get('http://api.icndb.com/jokes/random')
      .then((res) => {
        setJoke(res.data.value.joke)
      })
  }, [])

  const generateQuote = () => {
    setElement('quote')
    axios.get('https://animechan.vercel.app/api/random')
      .then((res) => {
        setQuote(res.data.quote)
        setCharacter(res.data.character)
      })

  }
  const generateJoke = () => {
    setElement('joke')
    axios.get('http://api.icndb.com/jokes/random')
      .then((res) => {
        console.log(joke)
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
    <HelmetProvider>
      <Helmet>
        <title>Weblock - Doni Wirawan</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div className='block sm:py-20 md:pt-24 px-4 w-screen h-screen bg-gray-100'>
        <Greet />
        <Time />
        <Date />
        {element == 'quote' ? <Quote text={quote} char={character} /> : <Joke text={joke} />}
        <Note />


        {element == 'quote' ? <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ease-in-out hover:ease-in py-3 px-8  text-center m-auto block mt-5 text-gray-100 hover:text-gray-200 rounded-full hover:bg-sky-700  font-semibold' onClick={generateQuote}>Change Quote</button> : <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ease-in-out hover:ease-in py-3 px-8  text-center m-auto block mt-5 text-gray-100 hover:text-gray-200 rounded-full hover:bg-sky-700 font-semibold' onClick={generateJoke}>Change Jokes</button>}


        {element == 'quote' ? <button className=' py-1 px-8  text-center m-auto block mt-5 text-gray-800 underline underline-offset-1 font-extralight font-xs' onClick={changeToJoke}>Change to joke</button> : <button className=' py-1 px-8  text-center m-auto block mt-5 text-gray-800 underline underline-offset-1 font-extralight font-xs' onClick={changeToQuote}>Change to Quote</button>}

      </div>
    </HelmetProvider>
  );
}

export default App;
