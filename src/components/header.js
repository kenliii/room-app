import React from 'react'
import logo from "../images/logo.svg"
import menu from "../images/icon-hamburger.svg"

export default function header() {
  return (
    <>
    <header>
        <div>
          <img src={logo} alt='' />
        </div>

        <nav></nav>

        <div>
          <button>
            <img src={menu} alt='' />
          </button>
        </div>
    </header>
    </>
  )
}
