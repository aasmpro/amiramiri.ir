import React from 'react'
import { Dots } from '../components/dots'

export const Main = () => {
  return (
    <div>
      <div id="background">
        <Dots />
      </div>
      <div id="backgroundText">
        <span>DJ</span>
      </div>
      <div id="content">
        <div className="main">
          <a href="tel:+989140963419">
            <div className="dj-title">
              <p className="amir-text">AMIR</p>
              <p className="amiri-text">AMIRI</p>
            </div>
          </a>
        </div>
        <div className="footer">
          <span className="link">
            <a href="https://instagram.com/dj.amir.amiri.pv" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
