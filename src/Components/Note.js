import React, { useState, useEffect } from 'react'

const Note = () => {
    const [text, setText] = useState('')
    const [button, setButton] = useState('false')

    const handleChange = (e) => {
        const input = e.target.value
        setText(input)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('note', text)
    }
    useEffect(() => {
        localStorage.getItem('note')
        setText(localStorage.getItem('note'))
    }, [])

    const buttonShow = () => {
        setButton(true)
    }

    const buttonDissappear = () => {
        setButton(false)
    }


    return (
        <div className='sm:py-0 md:py-8' onMouseLeave={buttonShow} onMouseOver={buttonDissappear}>
            <form onSubmit={handleSubmit} className='flex sm:w-full md:w-2/5 h-13 m-auto '>
                <input type={'text'} className={`border-b-2 focus:outline-none focus:outline-none  border-slate-700 mt-5 w-4/5 px-4 py-2 placeholder:text-left placeholder:font-light placeholder:text-lg text-lg font-light ${button ? 'placeholder:text-center text-center m-auto remove-blink' : ''}`} placeholder='What is your focus for today?' onChange={handleChange} value={text} ></input>
                {button ? <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ease-in-out hover:ease-in py-1 px-6  text-center m-auto block mt-9 ml-2 text-gray-100 hover:text-gray-200 rounded-sm hover:bg-sky-700  font-semibold hidden '></button> : <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ease-in-out hover:ease-in py-1 px-6  text-center m-auto block mt-9 ml-2 text-gray-100 hover:text-gray-200 rounded-sm hover:bg-sky-700  font-semibold '>Submit</button>}

            </form>
        </div>
    )
}

export default Note