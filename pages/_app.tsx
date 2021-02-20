import '../styles/globals.css'
import React, { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '@/store'

const MyApp: FC = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
