import React from 'react'
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(45deg, #1E00F5, #7b00f5);
    color: #FDFDFF;
    margin: 0;
    padding: 0;
    font-family:  'Archivo', sans-serif;
    font-weight: 400;

    @media(max-width: 768px) {
     padding: 0 16px
    }
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

