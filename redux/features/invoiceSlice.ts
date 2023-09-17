import {createSlice} from '@reduxjs/toolkit'

import {Invoice} from '@/types'

type InvoicesState = {
  invoices: Invoice[]
}

const initialState = {
  invoices: [
    {
      'id': 'RT3080',
      'createdAt': '2021-08-18',
      'paymentDue': '2021-08-19',
      'description': 'Re-branding',
      'paymentTerms': 1,
      'clientName': 'Jensen Huang',
      'clientEmail': 'jensenh@mail.com',
      'status': 'paid',
      'senderAddress': {
        'street': '19 Union Terrace',
        'city': 'London',
        'postCode': 'E1 3EZ',
        'country': 'United Kingdom'
      },
      'clientAddress': {
        'street': '106 Kendell Street',
        'city': 'Sharrington',
        'postCode': 'NR24 5WQ',
        'country': 'United Kingdom'
      },
      'items': [
        {
          'name': 'Brand Guidelines',
          'quantity': 1,
          'price': 1800.90,
          'total': 1800.90
        }
      ],
      'total': 1800.90
    }
  ]
} as InvoicesState

export const invoice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    reset: () => initialState,
    addInvoice: (state, action) => {
      state.invoices.push(action.payload)
    },
    deleteInvoice: (state, action) => {
      state.invoices.findIndex(el => el.id === action.payload.id)
      console.log(state.invoices)
    },
    updateStatusInvoice: (state, action) => {
      const updatedItemIdx = state.invoices.findIndex(el => el.id === action.payload.id)
      state.invoices[updatedItemIdx] = action.payload
    }
  }
})

export const {
  reset,
  addInvoice,
  deleteInvoice,
  updateStatusInvoice
} = invoice.actions
export default invoice.reducer
