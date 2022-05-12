import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Joke = (props) => {
    const [joke, setJoke] = useState(props.text)

    useEffect(() => {
        axios.get('http://api.icndb.com/jokes/random')
            .then((res) => {
                setJoke(res.data.value.joke)
            })
    }, [])

    return (
        <>
            <h2 className="my-4  text-xl text-center font-normal">{joke}</h2>
        </>
    )
}

export default Joke