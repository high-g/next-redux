import '@/styles/globals.css'
import React, { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '@/store'

const MyApp: FC = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
