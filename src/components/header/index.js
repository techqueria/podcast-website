import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoSquared from '@images/logo-squared.png'
import Styles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fabf67`,
      marginBottom: `1.45rem`,
    }}
    className={ Styles.container }
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        backgroundImage: `url(${LogoSquared})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '85px',
        backgroundPosition: '10px 5px',
        paddingLeft: '120px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* <img src={ LogoSquared } alt="Techqueria logo" className={ Styles.logoImg } /> */}
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
