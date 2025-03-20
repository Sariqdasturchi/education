import React from 'react'
import Home from './home'
import About from './about'
import Header from '../components/Header'

export default function Main() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <About />
      </main>
    </>
  )
}
