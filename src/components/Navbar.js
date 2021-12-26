import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (<>
    <nav className="custom-container navbar navbar-expand-lg navbar-light fixed-top p-4">
      <a className="navbar-brand" href="#">
        <img src="https://patika-prod.s3.eu-central-1.amazonaws.com/staticFiles/patikaLogo.png" alt="Patika Dev" />
      </a>
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <div className='navbar-left'>
          <div className="nav-item">Eğitimler</div>
          <div className="nav-item">Bootcampler</div>
          <div className="nav-item">
            <button className='nav-item-icon'>
              <FontAwesomeIcon icon={faMoon} />
            </button>
          </div>
        </div>
        <div className='navbar-right'>
          <span>Kayıt Ol</span>
        </div>
      </div>
    </nav>
  </>

  )
}

export default Navbar