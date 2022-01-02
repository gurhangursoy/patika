import React, { useContext } from 'react'
import { Context } from '../context/context'

const PathsDetail = ({ data }) => {

    const { selected } = useContext(Context)

    const value = data.find(item => item.title === selected)

    return (
        value.selectedPaths ?
            (value.selectedPaths?.map((item, index) => {
                return (
                    <div className='paths-container' key={index}>
                        <div className='paths-header'>
                            <div className='paths-detail'>
                                <h1 className='paths-title'>{item.title}</h1>
                                <div className='paths-body'>
                                    <p>{item.body}</p>
                                    <a href="#">daha fazla</a>
                                </div>
                                <div className='paths-buttons'>
                                    <div className='paths-button-wrapper'>
                                        <button className='button details-button'>Detaylar</button>
                                        <button className='button join-button'>Katıl</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='paths-detail-sub-sections'>
                            <div className='paths-detail-modules'>
                                <h3 className='paths-detail-modules-heading'>Modüller</h3>
                                <div className='paths-detail-modules-list'>
                                    {item.selectedCourses.map((course, index) => {
                                        return (
                                            <p className='paths-detail-modules-title' key={index}>❏ {course.label}</p>
                                        )
                                    })

                                    }
                                </div>
                            </div>
                            <div className='paths-detail-info'>
                                <h4 className='paths-detail-info-heading'>BU PATİKADA NE VAR?</h4>
                                <div className='paths-detail-info-wrapper'>
                                    <div className='paths-detail-info-top'>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/woman-with-bunny-ears.png'></img>
                                            <span>{item.applicantCount} Katılımcı</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/books-m.png'></img>
                                            <span>{item.duration} Saat</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/woman-weight-lifting.png'></img>
                                            <span>
                                                <span>{item.projectCount} alıştırma</span>
                                                <span>
                                                    <span> ve </span>
                                                    <span>{item.testCount} test</span>
                                                </span>
                                            </span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/handshake.png'></img>
                                            <span>Topluluk desteği</span>
                                        </p>
                                    </div>
                                    <div className='paths-detail-info-bottom'>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/money-mouth.png'></img>
                                            <span>Online & Ücretsiz</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/flexed-biceps.png'></img>
                                            <span>Bootcamp’e yerleştirme önceliği</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/points-coin.png'></img>
                                            <span>{item.totalPoints} puan kazan</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })) : (
                <>
                    <div className='paths-single-detail-container' key={value.id}>
                        <header className='paths-single-detail-header'>
                            {value.pathImage ? (
                                <img className='paths-single-detail-bg' src={value.pathImage} alt="" />
                            ) : null}
                            <div className='paths-single-details'>
                                <h1 className='paths-single-details-title'>{value.title}</h1>
                                <div className='paths-single-details-body'>
                                    <p>{value.body}</p>
                                </div>
                                <div className='paths-single-details-buttons'>
                                    {value.careerInfo ? (<div className='career-info-wrapper'>
                                        <h3 className='career-info-heading'>Kariyer imkanları</h3>
                                        <div className='career-info'>
                                            {<p>
                                                <span className="career-info-sub" >Çok yüksek </span>
                                            </p>}
                                        </div>
                                    </div>) : null}
                                    <div className='paths-single-details-buttons-wrapper'>
                                        <button className='paths-single-button paths-single-details-button'>Detaylar</button>
                                        <button className='paths-single-button paths-single-join-button'>Katıl</button>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className='paths-single-detail-sub-sections'>
                            <div className='paths-detail-modules'>
                                <h3 className='paths-detail-modules-heading'>Modüller</h3>
                                <div className='paths-detail-modules-list'>
                                    {value.selectedCourses.map((course, index) => {
                                        return (
                                            <p className='paths-detail-modules-title' key={index}>❏ {course.label}</p>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                            <div className='paths-detail-info'>
                                <h4 className='paths-detail-info-heading'>BU PATİKADA NELER VAR?</h4>
                                <div className='paths-detail-info-wrapper'>
                                    <div className='paths-detail-info-top'>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/woman-with-bunny-ears.png'></img>
                                            <span>{value.applicantCount} Katılımcı</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/books-m.png'></img>
                                            <span>{value.duration} Saat</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/woman-weight-lifting.png'></img>
                                            <span>
                                                <span>{value.projectCount} alıştırma</span>
                                                <span>
                                                    <span> ve </span>
                                                    <span>{value.testCount} test</span>
                                                </span>
                                            </span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/handshake.png'></img>
                                            <span>Topluluk desteği</span>
                                        </p>
                                    </div>
                                    <div className='paths-detail-info-bottom'>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/money-mouth.png'></img>
                                            <span>Online & Ücretsiz</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/flexed-biceps.png'></img>
                                            <span>Bootcamp’e yerleştirme önceliği</span>
                                        </p>
                                        <p className='paths-detail-info-text'>
                                            <img className='paths-detail-info-emoji' src='https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/points-coin.png'></img>
                                            <span>{value.totalPoints} puan kazan</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </>
            )
    )
}

export default PathsDetail