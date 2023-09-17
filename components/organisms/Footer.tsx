import React from 'react'

interface IFooter {
  className?: string
  children: React.ReactNode
}

const Footer = ({className, children}: IFooter) => {
  return (
    <footer className={`fixed bottom-0 left-0 w-full ${className}`}>
      {children}
    </footer>
  )
}

export default Footer