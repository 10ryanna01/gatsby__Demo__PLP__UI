import React from "react"
import { Link } from "gatsby" 
import "./styles/index.less"

const Footer = () => (
  
  <footer className={`footer`}>
    <div>
      <h3 className={`footer__title`}>You made past the infinate scroll #yay </h3>
        
        <div className={`footer__links`}> 
        <Link to="/">
            info
        </Link>
        <Link to="/">
         marketing 
        </Link>
        <Link to="/">
         support 
        </Link>
        </div>
    </div>
  </footer>
   
)

 
export default Footer

