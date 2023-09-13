'use client'

import Image from 'next/image'
import React, {useState} from 'react'

import {IconArrowDown} from '@/components/atoms/Icon'

interface IFilter {
  status?: string[]
}

const Filter = ({status = ['string', 'strong', 'strength']}: IFilter) => {
  const [openFilter, setOpenFilter] = useState(false)

  return (
    <div id="filter" className="relative">
      <div id="filter__header" className="flex cursor-pointer items-center gap-3"
           onClick={() => setOpenFilter(!openFilter)}>
        <p>Filter{' '}<span className="hidden md:inline-block">by status</span></p>

        <IconArrowDown
          className="fill-none stroke-purple-theme-normal"
        />
      </div>

      {openFilter && (
        <div id="filter__body"
             className="absolute -left-[100%] top-10 z-30 rounded-xl bg-white p-6 pr-16 shadow-2xl shadow-purple-theme-normal/25 dark:bg-clay-theme-ebony-normal dark:shadow-black/25 md:translate-x-1/2">
          <form id="filter__form" className="flex flex-col gap-[15px]">
            {status.map((s) => (
              <div key={s} id="filter__form-item-1" className="flex items-center gap-3">
                <input type="checkbox" id={`checkbox-${s}`} className="input__checkbox peer relative"/>
                <Image
                  src="/assets/icon-check.svg" alt="check-icon" width={10} height={8}
                  className="absolute ml-1 hidden peer-checked:block"
                />
                <label htmlFor={`checkbox-${s}`} className="heading__variant capitalize">{s}</label>
              </div>
            ))}
          </form>
        </div>
      )}
    </div>
  )
}

export default Filter