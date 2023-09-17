'use client'

import Link from 'next/link'

import Button from '@/components/atoms/Button'
import Filter from '@/components/atoms/Filter'
import {IconPlus} from '@/components/atoms/Icon'
import {useAppDispatch, useAppSelector} from '@/redux/hooks'
import {Invoice} from '@/types'

export default function Home() {
  const invoices = useAppSelector(state => state.invoiceReducer.invoices)
  const dispatch = useAppDispatch()

  return (
    <main>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div id="header__left">
            <h1 className="heading__m md:heading__l text-clay-theme-ebony-darker dark:text-white">Invoices</h1>
            <p className="body__variant text-gray-theme-normal dark:text-gray-theme-light">No invoices</p>
          </div>

          <div id="header__right" className="flex items-center gap-4">
            <div id="header__right-filter">
              <Filter/>
            </div>
            <Button customClass="button__one flex items-center"
                    childCustomClass="relative flex items-center gap-3">
              <div className="rounded-full bg-white p-4">
                <IconPlus className="fill-purple-theme-normal"/>
              </div>
              <div>New{' '}<span className="hidden md:inline-block">Invoice</span></div>
            </Button>
          </div>
        </div>

        <div id="invoices" className="w-full">
          {invoices.map((inv: Invoice) => {

            let statusTextColor
            statusTextColor = inv.status === 'paid' ? 'bg-[#33D69F]/[.05] text-[#33D69F]' : 'bg-[#FF8F00]/[.05] text-[#FF8F00]'

            let statusBackgroundColor
            statusBackgroundColor = inv.status === 'paid' ? 'bg-[#33D69F]' : 'bg-[#FF8F00]'

            return (
              // Invoice Card
              <Link key={inv.id} href={`/invoice/${inv.id}`}>
                <div id={`invoice-${inv.id}`}
                     className="flex flex-col gap-6 rounded-lg bg-clay-theme-ebony-dark-2 p-6 pb-8 shadow-md">

                  {/* Invoice Card --- Header */}
                  <div id={`invoice__header-${inv.id}`} className="flex justify-between">
                    <p className="heading__variant text-white"><span className="text-blue-theme-wild">#</span>{inv.id}
                    </p>

                    <p className="body__variant">
                      {inv.clientName}
                    </p>
                  </div>

                  {/* Invoice Card --- Body */}
                  <div id={`invoice__body-${inv.id}`} className="flex items-center justify-between">
                    <div id={`invoice__body-info-${inv.id}`} className="flex flex-col gap-3">
                      <p className="body__variant text-gray-theme-light">{inv.paymentDue}</p>
                      <p className="heading__variant text-white">{inv.total}</p>
                    </div>

                    <div id={`invoice__body-status-${inv.id}`}
                         className={`heading__variant flex w-28 items-center justify-center gap-2 rounded-lg py-3 ${statusTextColor}`}>
                      <span className={`rounded-full ${statusBackgroundColor} p-1`}/>
                      <span className="capitalize">
                        {inv.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="flex-1">

      </div>
    </main>
  )
}
