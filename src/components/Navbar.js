import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [theme, setTheme] = useState("light")

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (<>
    <nav className={`custom-container navbar navbar-${theme} navbar-expand-lg fixed-top p-4`}>
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
            <button className='nav-item-icon' onClick={switchTheme}>
              {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </button>
          </div>
        </div>
        <div className='navbar-signup'>
          <a href="#"><span>Kayıt Ol</span>
          </a>
        </div>
      </div>
    </nav>
  </>

  )
}

export default Navbar