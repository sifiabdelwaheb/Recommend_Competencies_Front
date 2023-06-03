import React, { Component, Suspense } from 'react'

import AppLocale from './lang'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

import { BrowserRouter } from 'react-router-dom'
import RecommnderCard from "./RecommnderCard"

class AppConfig extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { authUser, lang } = this.props
    const currentAppLocale = AppLocale[lang]
    return (
      <div className="wrapper">
        <IntlProvider locale={lang} messages={currentAppLocale.messages}>
          <React.Fragment>
            <BrowserRouter>
              <RecommnderCard />
            </BrowserRouter>
          </React.Fragment>
        </IntlProvider>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.settings.locale,
    authUser: state.auth.loaded,
  }
}
const mapActionsToProps = {}

export default connect(mapStateToProps, mapActionsToProps)(AppConfig)
