import React from 'react'
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: #040405;
    color: #c4c0ca;
    margin: 0;
    padding: 0;
    font-family:  'Archivo', sans-serif;
    font-weight: 400;
  }
`

export default class MyApp extends App {

  render() {
    const {Component, pageProps} = this.props
    return <>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </>
  }
}

