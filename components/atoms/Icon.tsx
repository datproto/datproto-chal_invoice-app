import React from 'react'

interface IIcon {
  width?: string
  height?: string
  className?: string
}

function IconArrowDown({className}: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      className={className}
    >
      <path
        strokeWidth="2"
        d="M1 1l4.228 4.228L9.456 1"
      ></path>
    </svg>
  )
}

function IconArrowRight({className}: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="10"
      className={className}
    >
      <path
        strokeWidth="2"
        d="M1 1l4 4-4 4"
      ></path>

    </svg>
  )
}

function IconArrowLeft({className}: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="10"
      className={className}
    >
      <path
        strokeWidth="2"
        d="M6.342.886L2.114 5.114l4.228 4.228"
      ></path>

    </svg>
  )
}

function IconCalendar({className}: IIcon) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className={className}
    >
      <path
        strokeWidth="2" opacity=".5"
        d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
      ></path>

    </svg>
  )
}

export {IconArrowDown, IconArrowRight, IconArrowLeft, IconCalendar}