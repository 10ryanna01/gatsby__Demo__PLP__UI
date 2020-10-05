import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./styles/index.less"

const Header = ({ siteTitle }) => (
  <header className={`header`}>
    <div>
      <h1 className={`header__title`}>
        <Link to="/" className={`header__link`}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
