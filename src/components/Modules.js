import React, { useContext } from 'react'
import { Context } from '../context/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Modules = () => {
    const { editedCourses: data } = useContext(Context)

    return (
        <div className='modules-container'>
            <div className='modules-section'>
                <div className='modules-list'>
                    <h1 className='modules-title'>Tüm eğitim modüllerimiz</h1>
                    {data.map((item, index) => {
                        const { title, rating, courseApplicantCount, courseTotalPoints, courseDuration } = item
                        return (
                            <a className='modules-box' key={index}>
                                <h2>
                                    {title}
                                </h2>
                                <div className='modules-stars' >
                                    {rating}
                                    <span style={{ color: "#FFBF5E" }}>
                                        <span><FontAwesomeIcon icon={faStar} /></span>
                                        <span><FontAwesomeIcon icon={faStar} /></span>
                                        <span><FontAwesomeIcon icon={faStar} /></span>
                                        <span><FontAwesomeIcon icon={faStar} /></span>
                                        {rating === 5 ? <span><FontAwesomeIcon icon={faStar} /></span> : <span><FontAwesomeIcon icon={faStarHalfAlt} /></span>}
                                    </span>
                                </div>
                                <div className='modules-info'>
                                    <p><img src="https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/woman-with-bunny-ears.png" alt="woman with bunny ears emoji" />{courseApplicantCount} katılımcı</p>
                                    <p><img src=" https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/points-coin.png" alt="small coin" />{courseTotalPoints} puan kazan</p>
                                    <p><img src="https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/books-m.png" alt="books emoji" />{courseDuration} saatlik ders içeriği</p>
                                </div>
                                <button className='modules-button'>
                                    Detaylar
                                </button>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Modules