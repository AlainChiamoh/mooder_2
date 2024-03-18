import React from 'react'

const Button = ({children,className:style}) => {
  return (
    <button className={`rounded-sm max-sm:px-2 py-0.5 px-4 py-1 ${style} `}>{children}</button>
  )
}

export default Button