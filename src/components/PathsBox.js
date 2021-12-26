import React from 'react'

const PathsBox = ({ selected, setSelected, index, value }) => {

    const handleSelected = () => {
        setSelected(index)
    }

    return (
        <button
            className="path-box"
            key={value}
            style={{ backgroundColor: selected === index ? "#FFBF5E" : "" }}
            onClick={handleSelected}
        >
            {value}
        </button>
    )
}

export default PathsBox