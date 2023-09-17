import React from 'react'

interface IInvoiceStatus {
  id?: string
  status: string
}

const InvoiceStatus = ({id, status}: IInvoiceStatus) => {
  let statusTextColor
  statusTextColor = status === 'paid' ? 'bg-[#33D69F]/[.05] text-[#33D69F]' : 'bg-[#FF8F00]/[.05] text-[#FF8F00]'

  let statusBackgroundColor
  statusBackgroundColor = status === 'paid' ? 'bg-[#33D69F]' : 'bg-[#FF8F00]'

  return (
    <div id={`invoice__detail-status${id && `-${id}`}`}
         className={`invoice__detail-status ${statusTextColor}`}>
      <span className={`rounded-full ${statusBackgroundColor} p-1`}/>
      <span className="capitalize">
          {status}
        </span>
    </div>
  )
}

export default InvoiceStatus