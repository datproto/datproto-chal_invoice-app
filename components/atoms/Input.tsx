'use client'

import {format, getYear} from 'date-fns'
import React, {forwardRef, useState} from 'react'
import DatePicker, {CalendarContainer} from 'react-datepicker'

import Button from '@/components/atoms/Button'
import {IconArrowDown, IconArrowLeft, IconArrowRight, IconCalendar} from '@/components/atoms/Icon'

interface IInput {
  label?: string
  inputName: string
  inputType?: string
  inputPlaceholder?: string
  inputValue?: string
  inputDisabled?: boolean
  inputReadonly?: boolean
  customClass?: string
  inputCustomClass?: string
  valueArray?: {
    id: number
    value: string
    recommended?: boolean
  }[]
  children?: React.ReactNode
  childClass?: string
}

const Input = ({
                 label = 'Label',
                 inputType = 'text',
                 inputName,
                 inputPlaceholder = '',
                 inputValue,
                 inputDisabled = false,
                 inputReadonly = false,
                 customClass,
                 inputCustomClass,
                 children,
                 childClass
               }: IInput) => {
  return (
    <div className={`relative flex flex-col gap-2 ${customClass}`}>
      <label htmlFor={inputName} className="font-medium text-blue-theme-wild dark:text-gray-theme-light">{label}</label>
      <input type={inputType} name={inputName}
             placeholder={inputPlaceholder}
             value={inputValue}
             readOnly={inputReadonly}
             disabled={inputDisabled}
             className={`${inputCustomClass}`}
      />
      {children && (
        <div className={`absolute ${childClass}`}>
          {children}
        </div>
      )}
    </div>
  )
}

const InputDropdown = ({label, inputName, valueArray}: IInput) => {
  const [optionValue, setOptionValue] = useState(valueArray && valueArray?.length > 0 ? valueArray[0].value : 'Nothing here ...')
  const [openDropdown, setOpenDropdown] = useState(false)

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown)
  }

  const handleOptionSelect = (e: React.MouseEvent) => {
    e.preventDefault()

    setOptionValue(e.currentTarget.textContent ? e.currentTarget.textContent : '')
    setOpenDropdown(false)
  }

  const DropDown = () => {
    return (
      <div
        className="absolute top-28 w-full divide-y rounded-md bg-white capitalize shadow-lg dark:divide-clay-theme-ebony-dark-2 dark:bg-clay-theme-ebony-normal">
        {valueArray && valueArray.length > 0 ? valueArray.map(v => (
          <div
            key={v.id}
            className="cursor-pointer px-6 pb-[14px] pt-[17px] font-bold text-clay-theme-ebony-darker hover:text-purple-theme-normal dark:text-gray-theme-light dark:hover:text-purple-theme-normal"
            onClick={(e) => handleOptionSelect(e)}
          >
            {v.value}
          </div>
        )) : (
          <div
            className="cursor-pointer px-6 pb-[14px] pt-[17px] font-bold text-clay-theme-ebony-darker hover:text-purple-theme-normal dark:text-gray-theme-light dark:hover:text-purple-theme-normal"
            onClick={(e) => handleOptionSelect(e)}
          >
            Nothing here ...
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative" onClick={handleOpenDropdown}>
      <Input
        label={label}
        inputType="text" inputName={inputName}
        inputValue={optionValue}
        inputCustomClass="cursor-pointer capitalize"
        inputReadonly={true}
        childClass="bottom-5 right-4"
      >
        <IconArrowDown
          className="stroke-purple-theme-normal"
        />
      </Input>

      {
        openDropdown && (
          <DropDown/>
        )
      }
    </div>
  )
}

const InputDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date())

  const ThemeContainer = ({className, children}: {
    className: string,
    children: React.ReactNode
  }) => {
    return (
      <div className="border-none bg-transparent">
        <CalendarContainer className={className}>
          <div style={{position: 'relative'}}>{children}</div>
        </CalendarContainer>
      </div>
    )
  }

  const ThemeHeader = ({
                         date,
                         decreaseMonth,
                         increaseMonth,
                         prevMonthButtonDisabled,
                         nextMonthButtonDisabled
                       }: {
    date: Date,
    decreaseMonth: any,
    increaseMonth: any,
    prevMonthButtonDisabled: any,
    nextMonthButtonDisabled: any,
  }) => {
    console.log(date)
    return (
      <div
        className="flex w-full items-center justify-between p-0"
      >

        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="p-0">
          <IconArrowLeft
            className="fill-none stroke-purple-theme-normal stroke-2"
          />
        </button>

        <div className="heading__variant">
          {format(date, 'LLL')}{' '}
          {getYear(date)}
        </div>

        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="p-0">
          <IconArrowRight
            className="fill-none stroke-purple-theme-normal stroke-2"
          />
        </button>
      </div>
    )
  }

  const ThemeInput = forwardRef(({value, onClick}: {
    value?: string,
    onClick?: any
  }, ref: React.ForwardedRef<HTMLButtonElement>) => (
    <Button text={value || ''} forwardedRef={ref} onClick={onClick}
            customClass="bg-white dark:bg-clay-theme-ebony-dark-2 text-left w-full border border-gray-theme-light active:border-purple-theme-normal dark:border-clay-theme-ebony-normal focus:border-purple-theme-normal hover:border-purple-theme-normal rounded-md"
            childCustomClass="right-0 top-0 bottom-0 flex items-center right-4"
    >
      <IconCalendar
        className="fill-purple-theme-normal"
      />
    </Button>
  ))
  ThemeInput.displayName = 'Date Picker'

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date ? date : new Date())}
      calendarContainer={ThemeContainer}
      wrapperClassName="input__datepicker"
      renderCustomHeader={({
                             date,
                             decreaseMonth,
                             increaseMonth,
                             prevMonthButtonDisabled,
                             nextMonthButtonDisabled
                           }: {
        date: Date,
        decreaseMonth: any,
        increaseMonth: any,
        prevMonthButtonDisabled: any,
        nextMonthButtonDisabled: any,
      }) => (
        <ThemeHeader
          date={date}
          decreaseMonth={decreaseMonth}
          increaseMonth={increaseMonth}
          prevMonthButtonDisabled={prevMonthButtonDisabled}
          nextMonthButtonDisabled={nextMonthButtonDisabled}
        />
      )}
      customInput={<ThemeInput/>}
    />
  )
}

export default Input
export {InputDropdown, InputDatePicker}