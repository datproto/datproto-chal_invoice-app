import React from 'react'

interface ILogo {
  customClass?: string
}

function Logo({customClass}: ILogo) {
  return (
    <div className={`relative aspect-square overflow-hidden ${customClass}`}>
      <div className="absolute z-0 h-full w-full rounded-r-2xl bg-purple-theme-normal 2xl:rounded-r-3xl"/>
      <div
        className="absolute bottom-0 z-0 h-1/2 w-full rounded-br-2xl rounded-tl-2xl bg-purple-theme-light 2xl:rounded-br-3xl 2xl:rounded-tl-3xl"/>
      <div className="absolute z-50 flex h-full w-full items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 26"
          className="absolute h-6 w-7 fill-white 2xl:h-9 2xl:w-10"
        >
          <path
            strokeWidth="1"
            d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Logo