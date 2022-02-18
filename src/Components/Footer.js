import React from 'react'
import fbicon from "../Icons/facebook@2x.png"
import igicon from "../Icons/instagram@2x.png"
import twicon from "../Icons/twitter@2x.png"

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <img src={fbicon} alt="" className="social__icons" width="30"/>
        <img src={igicon} alt="" className="social__icons" width="30"/>
        <img src={twicon} alt="" className="social__icons" width="30"/>
      </div>
      <div className="contactinfo">
        <p className="pseudolink"><span>About</span> <span>Support</span> <span>Jobs</span></p>
        <p className="pseudolink"><span>Terms Of Use</span><span>Privacy Policy</span><span>Jobs</span></p>
        <p>©2022 phoneZILLA</p>
      </div>
    </footer>
  )
}

export default Footer;