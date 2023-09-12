'use client'
import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])


  if (!mounted) {
    return null
  }


  return (
    <button
      className={`absolute right-5 top-2 w-fit rounded-md bg-slate-200 p-2 duration-200 hover:scale-110 active:scale-100 dark:bg-[#212933]`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}