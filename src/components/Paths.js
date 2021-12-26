import React, { useContext, useState } from 'react'
import { Context } from '../context/context'
import PathsBox from "./PathsBox"

const Paths = () => {

    const { editedPathBundles, editedPathsWithoutBundles } = useContext(Context)
    const data = [...editedPathBundles, ...editedPathsWithoutBundles]

    const [selected, setSelected] = useState(0)

    return (
        <div className="paths-section">
            <h1>Kariyer patikanı seç ve yolculuğuna başla</h1>
            <div className='path-list'>
                {data.map((item, index) => {
                    return (
                        <PathsBox
                            selected={selected}
                            setSelected={setSelected}
                            index={index}
                            value={item.title}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Paths