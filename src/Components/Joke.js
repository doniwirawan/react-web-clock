import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Joke = (props) => {
    const [joke, setJoke] = useState(props.text)

    useEffect(() => {
        if (!joke) {
            axios.get('https://geek-jokes.sameerkumar.website/api?format=json')
                .then((res) => {
                    setJoke(res.data.joke)
                })
        }

    }, [])


    return (
        <>
            <h2 className="my-4  text-xl text-center font-normal">{joke}</h2>
        </>
    )
}

export default Joke