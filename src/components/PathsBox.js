import React, { useContext } from 'react'
import { Context } from '../context/context'

const PathsBox = ({ value }) => {

    const { selected, setSelected } = useContext(Context)

    const handleSelected = () => {
        setSelected(value)
    }

    return (
        <p
            className="path-box"
            key={value}
            style={{ backgroundColor: selected === value ? "#FFBF5E" : "" }}
            onClick={handleSelected}
        >
            {value}
        </p>
    )
}

export default PathsBox