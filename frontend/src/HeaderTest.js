import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.text} | {props.value}</h1>
  )
}

export default Header
