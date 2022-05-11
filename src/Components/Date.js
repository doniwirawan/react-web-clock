import React, {useState, useEffect} from 'react'
import * as dayjs from 'dayjs'


const Date = () => {
    const [date, setDate] = useState(dayjs().format('DD-MM-YYYY'))
    setInterval(() => {
        setDate(dayjs().format('DD-MM-YYYY'))
    }, 5000);

  return (
    <div>
          <h2 className="my-4 text-md text-center font-light">{date}</h2>
    </div>
  )
}

export default Date