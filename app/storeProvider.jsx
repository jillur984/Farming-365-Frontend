'use client'

import { useRef } from 'react'
import Cookies from 'js-cookie'
import { Provider } from 'react-redux'
import { makeStore } from './lib/store/store'
import { setToken } from './lib/store/features/auth/authSlice'

export default function StoreProvider({ children }) {
  const storeRef = useRef(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()

    const token = Cookies.get('token')

   

    if (token) {
      storeRef.current.dispatch(setToken(token))
    }
  }

  return (
    <Provider store={storeRef.current}>
      {children}
    </Provider>
  )
}
