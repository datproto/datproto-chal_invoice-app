import {configureStore} from '@reduxjs/toolkit'

import invoiceReducer from './features/invoiceSlice'

export const store = configureStore({
  reducer: {
    invoiceReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
