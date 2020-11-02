import React from "react"
import { Link } from "@reach/router"
import {
  getAPIBase,
  getLanguages,
  getCurrentLanguage,
  changeLanguage,
} from "../helpers/AppHelpers"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : {}
}

const NavLink = props => <Link getProps={isActive} {...props} />

function renderLanguages() {
  const currentLanguage = getCurrentLanguage()

  return (
    <div className="languages">
      {getLanguages().map(lang => (
        // eslint-disable-next-line
        <span
          key={`lang-${lang}`}
          data-active={currentLanguage === lang}
          onClick={() => {
            changeLanguage(lang)
          }}
          onKeyUp={() => {
            changeLanguage(lang)
          }}
        >
          {lang}
        </span>
      ))}
    </div>
  )
}

const NavigationWidget = props => {
  const navItems = props.navItems

  return navItems ? (
    <nav className="Navigation">
      {navItems.map(item => {
        let to = item["@path"].replace(process.env.GATSBY_MGNL_APP_BASE, "")
        if (props.static) {
          to = "/static" + to
        }
        return (
          <NavLink key={item["@id"]} to={to}>
            {item.navigationTitle || item.title || item["@name"]}
          </NavLink>
        )
      })}
    </nav>
  ) : (
    <div />
  )
}

// TODO Renable. {renderLanguages()}

// TODO Fix navigation - going from contact back to index does not work.

function Navigation() {
  const [navItems, setNavItems] = React.useState([])

  React.useEffect(() => {
    async function fetchNav() {
      const apiBase = getAPIBase()
      const url =
        apiBase +
        process.env.GATSBY_MGNL_API_NAV +
        process.env.GATSBY_MGNL_APP_BASE
      console.log("NAV URL:" + url)
      const response = await fetch(url)
      const data = await response.json()
      let items = data["@nodes"].map(nodeName => {
        return data[nodeName]
      })
      setNavItems([data, ...items])
    }

    if (navItems.length < 1) {
      fetchNav()
    }
  }, [navItems])

  return <NavigationWidget navItems={navItems} static={false} />
}

export { Navigation, NavigationWidget }
