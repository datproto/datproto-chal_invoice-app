'use client'

import {useTheme} from 'next-themes'
import React from 'react'

import Avatar from '@/components/atoms/Avatar'
import {IconMoon, IconSun} from '@/components/atoms/Icon'
import Logo from '@/components/atoms/Logo'

const Navbar = () => {
  const {theme, setTheme} = useTheme()

  return (
    <header
      className="fixed flex w-full items-center justify-between bg-[#373B53] dark:bg-clay-theme-ebony-dark-2 2xl:h-full 2xl:w-24 2xl:flex-col 2xl:rounded-r-3xl">
      <Logo
        customClass="h-[72px] md:h-20 2xl:w-full 2xl:h-auto"
      />
      <div id="right-side"
           className="mr-4 flex h-[72px] items-center gap-4 md:h-20 2xl:mb-6 2xl:mr-0 2xl:h-auto 2xl:w-full 2xl:flex-col 2xl:gap-6">
        {theme === 'light' ? (
          <div onClick={() => setTheme('dark')} className="cursor-pointer">
            <IconMoon
              className="fill-blue-theme-wild dark:fill-[#858BB2]"
            />
          </div>
        ) : (
          <div onClick={() => setTheme('light')} className="cursor-pointer">
            <IconSun
              className="fill-blue-theme-wild dark:fill-[#858BB2]"
            />
          </div>
        )}
        <div className="h-full border border-[#494E6E] 2xl:h-[1px] 2xl:w-full"/>
        <div className="relative aspect-square w-8 2xl:w-10">
          <Avatar imgUrl="https://i.pravatar.cc/"/>
        </div>
      </div>
    </header>
  )
}

export default Navbar