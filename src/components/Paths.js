import React, { useContext } from 'react'
import { Context } from '../context/context'
import PathsBox from "./PathsBox"
import PathsDetail from './PathsDetail'

const Paths = () => {

    const { editedPathBundles, editedPathsWithoutBundles } = useContext(Context)
    const data = [...editedPathBundles, ...editedPathsWithoutBundles]

    return (
        <div className="paths-section">
            <h1>Kariyer patikanı seç ve yolculuğuna başla</h1>
            <div className='path-list'>
                {data.map((item, index) => {
                    return (
                        <PathsBox
                            value={item.title}
                            key={index}
                        />
                    )
                })}
                <PathsDetail
                    data={data}
                />
            </div>
        </div>
    )
}

export default Paths