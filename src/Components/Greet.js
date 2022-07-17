import React, { useState, useEffect } from 'react'
import * as dayjs from 'dayjs'

const Greet = () => {
    const [greet, setGreet] = useState(dayjs().format('HH'))
    if (greet < 12 && greet > 6) {
        return (
            <div>
                <h2 className="py-4 text-3xl text-center font-extralight">Good Morning</h2>
            </div>
        )

    } else if (greet == 12 && greet <= 15) {
        return (
            <div>
                <h2 className="py-4 text-7xl text-center font-extralight">Good Afternoon</h2>
            </div>
        )
    } else {
        return (
            <div>
                <h2 className="py-4 text-7xl text-center font-extralight">Good Evening</h2>
            </div>
        )
    }
}

export default Greet