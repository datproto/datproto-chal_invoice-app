'use client'

import {useWindowSize} from '@uidotdev/usehooks'
import {useParams, useRouter} from 'next/navigation'
import {Fragment} from 'react'

import Button from '@/components/atoms/Button'
import {IconArrowLeft} from '@/components/atoms/Icon'
import InvoiceStatus from '@/components/atoms/InvoiceStatus'
import Footer from '@/components/organisms/Footer'
import {deleteInvoice} from '@/redux/features/invoiceSlice'
import {useAppDispatch, useAppSelector} from '@/redux/hooks'
import {Item} from '@/types'
import {currencyFormatter} from '@/utils'

interface IInvoiceItems {
  key?: string
  invoiceItem?: Item
  invoiceItems?: Item[]
  totalPrice?: number
}

const InvoiceActionButtonGroup = ({invoiceId}: { invoiceId: string }) => {
  const dispatch = useAppDispatch()

  const deleteInvoiceHandler = () => {
    dispatch(deleteInvoice(invoiceId))
  }

  const updateStatusInvoiceHandler = () => {

  }
  return (
    <div
      className="flex items-center justify-center gap-2 bg-white p-6 dark:bg-clay-theme-ebony-dark-2 md:justify-end md:p-0">
      <Button
        customClass="button__three"
        text="Edit"
      />

      <Button
        customClass="button__five"
        text="Delete"
        onClick={deleteInvoiceHandler}
      />

      <Button
        customClass="button__two flex-1 md:flex-none"
        text="Mark as Paid"
      />
    </div>
  )
}

const InvoiceItemsList = ({key, invoiceItem}: IInvoiceItems) => (
  <Fragment key={`invoice__detail-information__items_${key}`}>
    <div
      className="invoice__detail-information__items-list">
      <div className="flex flex-col gap-2">
        <div className="heading__variant dark:text-white">{invoiceItem?.name}</div>
        <div className="heading__variant text-blue-theme-wild dark:text-gray-theme-normal">
          {invoiceItem?.quantity} x {invoiceItem?.price}
        </div>
      </div>
      <div className="heading__variant text-clay-theme-ebony-darker dark:text-white">
        {invoiceItem?.total}
      </div>
    </div>
    <div
      className="invoice__detail-information__items-total">
      <div className="body__normal capitalize text-white">grand total</div>
      <div className="heading__m tracking-[-.5px] text-white">{invoiceItem?.total}</div>
    </div>
  </Fragment>
)

const InvoiceItemsTable = ({key, invoiceItems, totalPrice}: IInvoiceItems) => (
  <Fragment key={`invoice__detail-information__items_${key}`}>
    <div className="invoice__detail-information__items-table">
      <table className="w-full table-auto">
        <thead>
        <tr className="body__normal ext-blue-theme-wild dark:text-gray-theme-light">
          <th className="text-left">Item Name</th>
          <th className="text-center">QTY.</th>
          <th className="text-right">Price</th>
          <th className="text-right">Total</th>
        </tr>
        </thead>
        <tbody>
        {invoiceItems && invoiceItems.map(i => (
          <tr key={i.name} className="text-blue-theme-wild dark:text-gray-theme-light">
            <td className="heading__variant pt-8 text-left text-clay-theme-ebony-darker dark:text-white">{i.name}</td>
            <td className="heading__variant pt-8 text-center">{i.quantity}</td>
            <td className="heading__variant pt-8 text-right">{currencyFormatter(i.price)}</td>
            <td
              className="heading__variant pt-8 text-right text-clay-theme-ebony-darker dark:text-white">{currencyFormatter(i.total)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    <div
      className="invoice__detail-information__items-total">
      <div className="body__normal capitalize text-white">amount due</div>
      <div className="heading__m tracking-[-.5px] text-white">{currencyFormatter(totalPrice)}</div>
    </div>
  </Fragment>
)

const Page = () => {
  const router = useRouter()
  const windowSize = useWindowSize()
  const invoiceId = useParams().id

  let invoiceFilter = useAppSelector(state => state.invoiceReducer.invoices)
  invoiceFilter = invoiceFilter.filter(el => el.id == invoiceId)

  const invoice = invoiceFilter[0]

  return (
    <Fragment>
      <main id="invoice" className="overflow-y-auto">
        <div className="mb-8 flex cursor-pointer gap-6" onClick={() => router.push('/')}>
          <IconArrowLeft className="fill-none stroke-purple-theme-normal"/>
          <p className="heading__variant text-clay-theme-ebony-darker dark:text-white">Go back</p>
        </div>

        <div className="invoice__detail flex flex-col gap-4 md:gap-6">
          <div className="invoice__detail-header">
            <div className="body__variant text-[#858BB2] dark:text-gray-theme-light">Status</div>

            <InvoiceStatus id={invoice.id} status={invoice.status}/>

            <div className="hidden flex-1 md:block">
              <InvoiceActionButtonGroup
                invoiceId={invoice.id}
              />
            </div>
          </div>
          <div className="invoice__detail-information shadow-theme">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div className="invoice__detail-information__title">
                <div>
                  <span className="text-blue-theme-wild">#</span>{invoice.id}
                </div>
                <div className="body__variant text-blue-theme-wild dark:text-gray-theme-light">
                  {invoice.description}
                </div>
              </div>

              <div className="invoice__detail-information__sender-address">
                <div className="invoice__detail-information__sender-address-street">{invoice.senderAddress.street}</div>
                <div className="invoice__detail-information__sender-address-city">{invoice.senderAddress.city}</div>
                <div
                  className="invoice__detail-information__sender-address-postcode">{invoice.senderAddress.postCode}</div>
                <div
                  className="invoice__detail-information__sender-address-country">{invoice.senderAddress.country}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="body__variant capitalize text-blue-theme-wild dark:text-gray-theme-light">invoice
                                                                                                            date
                  </div>
                  <div className="heading__s text-clay-theme-ebony-darker dark:text-white">
                    {invoice.createdAt}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="body__variant capitalize text-blue-theme-wild dark:text-gray-theme-light">payment
                                                                                                            due
                  </div>
                  <div className="heading__s text-clay-theme-ebony-darker dark:text-white">
                    {invoice.paymentDue}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="body__variant capitalize text-blue-theme-wild dark:text-gray-theme-light">bill to</div>
                <div className="flex flex-col gap-2">
                  <div className="heading__s text-clay-theme-ebony-darker dark:text-white">
                    {invoice.clientName}
                  </div>
                  <div
                    className="body__variant flex flex-col gap-1 capitalize text-blue-theme-wild dark:text-gray-theme-light">
                    <div>
                      {invoice.clientAddress.street}
                    </div>
                    <div>
                      {invoice.clientAddress.city}
                    </div>
                    <div>
                      {invoice.clientAddress.postCode}
                    </div>
                    <div>
                      {invoice.clientAddress.country}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="body__variant capitalize text-blue-theme-wild dark:text-gray-theme-light">bill to</div>
                <div className="heading__s text-clay-theme-ebony-darker dark:text-white">
                  {invoice.clientEmail}
                </div>
              </div>
            </div>

            <div className="invoice__detail-information__items">
              {windowSize.width && windowSize.width < 768 ? (
                invoice.items.map(i => {
                  const key = i.name.replace(' ', '-').toLowerCase()
                  return <InvoiceItemsList key={key} invoiceItem={i}/>
                })
              ) : <InvoiceItemsTable invoiceItems={invoice.items} totalPrice={invoice.total}/>}
            </div>
          </div>
        </div>
      </main>
      <Footer className="md:hidden">
        <InvoiceActionButtonGroup
          invoiceId={invoice.id}
        />
      </Footer>
    </Fragment>
  )
}

export default Page