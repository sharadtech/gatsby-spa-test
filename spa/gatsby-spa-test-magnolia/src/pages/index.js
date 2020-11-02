import React from "react"
import PageLoader from "../helpers/PageLoader"
import SiteHeader from "../components/SiteHeader"
import { Router } from "@reach/router"
import "../App.css"

const RouteStart = () => (
  <Router>
    <LoaderWithEditing default />
  </Router>
)

const LoaderWithEditing = () => (
  <div>
    <header>
      <SiteHeader />
    </header>

    <PageLoader />

    <footer>
      Gatsby SPA Test | Sharad Kumar | Copyright © 2020
    </footer>
  </div>
)

export default RouteStart
