import React, {useState, useEffect} from 'react'
import * as dayjs from 'dayjs'


const Time = () => {
  const [clock, setClock] = useState(dayjs().format('HH:mm:ss'))
  setInterval(() => {
    setClock(dayjs().format('HH:mm:ss'))
  }, 100);


  return (
    <div>
      <h2 className="sm:text-8xl md:text-9xl text-center font-bold">{clock}</h2> 
    </div>
  )
}

export default Time