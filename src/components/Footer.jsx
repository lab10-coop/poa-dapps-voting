import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

export const Footer = ({ netId }) => {
  const footerClassName = netId === '77' ? 'sokol' : ''
  return (
    <footer className={`footer ${footerClassName}`}>
      <div className="container">
        <p className="footer-rights">{moment().format('YYYY')} POA Network. All rights reserved.</p>
        <Link to="/poa-dapps-voting" className="footer-logo" />
        <div className="socials">
          <a href="https://twitter.com/poanetwork" className="socials-i socials-i_twitter" />
          <a href="https://poa.network" className="socials-i socials-i_oracles" />
          <a href="https://t.me/oraclesnetwork" className="socials-i socials-i_telegram" />
          <a href="https://github.com/poanetwork/" className="socials-i socials-i_github" />
        </div>
      </div>
    </footer>
  )
}
