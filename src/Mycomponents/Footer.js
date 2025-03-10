import React from 'react'

export const Footer = () => {
    let footerstyle={
        top: "100vh",
        position: "relative",
        border: "5px",
        width: "100%"
    }
  return (
    <footer className='bg-dark text-light py-3' style={footerstyle}>
        <p className='text-center' >
            copyrights claimed
        </p>
    </footer>
  )
}
