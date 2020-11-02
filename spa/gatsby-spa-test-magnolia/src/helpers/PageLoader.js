import React from "react"
import config from "../magnolia.config"
import {
  getAPIBase,
  getLanguages,
  removeCurrentLanguage,
  getCurrentLanguage,
} from "./AppHelpers"

import { EditablePage } from "@magnolia/react-editor"
import { EditorContextHelper } from "@magnolia/react-editor"

class PageLoader extends React.Component {
  state = {}

  getPagePath = () => {
    const languages = getLanguages()
    const nodeName = process.env.GATSBY_MGNL_APP_BASE
    const currentLanguage = getCurrentLanguage()
    let path = nodeName + window.location.pathname.replace(new RegExp("(.*" + nodeName + "|.html)", "g"),"")

    if (currentLanguage !== languages[0]) {
      path = removeCurrentLanguage(path, currentLanguage)
      path += "?lang=" + currentLanguage
    }

    return path
  }

  loadPage = async () => {
    // Bail out if already loaded content.
    if (this.state.pathname === window.location.pathname)
      return

    const apiBase = getAPIBase()

    const pagePath = this.getPagePath()
    console.log("pagePath:" + pagePath)
    let fullContentPath = apiBase + process.env.GATSBY_MGNL_API_PAGES + pagePath

    const pageResponse = await fetch(fullContentPath)
    const pageJson = await pageResponse.json()
    console.log("page content: ", pageJson)

    const templateId = pageJson["mgnl:template"]
    console.log("templateId:", templateId)

    let templateJson = null
    if (true || EditorContextHelper.inEditor()) {
      const templateResponse = await fetch(
        apiBase + process.env.GATSBY_MGNL_API_TEMPLATES + "/" + templateId
      )
      templateJson = await templateResponse.json()
      console.log("definition:", templateJson)
    }

    this.setState({
      init: true,
      content: pageJson,
      templateDefinitions: templateJson,
      pathname: window.location.pathname,
    })
  }

  componentDidMount() {
    this.loadPage()
  }

  componentDidUpdate() {
    this.loadPage()
  }

  render() {
    if (this.state.init) {
      console.log("config:", config)
      //const isDevMode = process.env.NODE_ENV === 'development';
      //console.log("n:" + process.env.NODE_ENV)

      return (
        <EditablePage
          templateDefinitions={this.state.templateDefinitions || {}}
          content={this.state.content}
          config={config}
        ></EditablePage>
      )
    } else {
      return <p>NO PAGE.</p>
    }
  }
}

export default PageLoader
