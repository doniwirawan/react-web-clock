import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Quote = (props) => {
    const [quote, setQuote] = useState(props.text)
    const [character, setCharacter] = useState(props.char)

    useEffect(() => {
            axios.get('https://animechan.vercel.app/api/random')
                .then((res) => {
                    setQuote(res.data.quote)
                    setCharacter(res.data.character)
                })
                
    }, [])

  return (
      <div className="w-9/12 mx-auto">
          <h2 className="text-xl text-center font-normal">{props.text? `"${props.text}"`:''}</h2>
          <h2 className="text-md mt-2 text-center font-semibold">{props.char? `-${props.char}`:''}</h2>
      </div>
  )
}

export default Quote