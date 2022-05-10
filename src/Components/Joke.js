import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Joke = () => {
    const [joke, setJoke] = useState([])
    useEffect(() => {
        axios.get('http://api.icndb.com/jokes/random')
            .then((res) => {
                console.log(res.data)
                setJoke(res.data.value.joke)
            })
    }, [])

    return (
        <>
            <h2 className="my-4  text-xl text-center font-semibold">{joke}</h2>
        </>
    )
}

export default Joke