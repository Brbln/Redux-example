import React from 'react'
import {useSelector} from 'react-redux'

export const IcecreamView = () => {
    const numOfIcecreams = useSelector(state=>state.icecream.numOfIcecreams)
    return (
        <div>
            <h2>Number of ice creams - {numOfIcecreams}</h2>
            <button>order ice creams</button>
            <button>Restock ice creams</button>
        </div>
    )
}
