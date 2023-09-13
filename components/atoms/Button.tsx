import React from 'react'

interface IButton {
  type?: 'submit' | 'button'
  icon?: React.ReactNode
  text?: string
  customClass?: string
  forwardedRef?: React.ForwardedRef<HTMLButtonElement>
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  childCustomClass?: string
}

const Button = ({type = 'button', icon, text = '', customClass, forwardedRef, onClick, childCustomClass, children}: IButton) => {
  return (
    <button type={type} className={`relative ${customClass}`} ref={forwardedRef} onClick={onClick}>
      {text}
      <div className={`absolute ${childCustomClass}`}>
        {children}
      </div>
    </button>
  )
}

export default Button