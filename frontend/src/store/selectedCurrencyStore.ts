import { create } from 'zustand'
import { CURRENCY, Currency } from '../types.d'

interface SelectedCurrencyStoreType {
  selectedCurrency: Currency
  changeCurrency: (currency: Currency) => void
  resetSelectedCurrency: () => void
}

export const selectedCurrencyStore = create<SelectedCurrencyStoreType>(set => ({
  selectedCurrency: CURRENCY.dollar.name,
  changeCurrency: currency => {
    set({ selectedCurrency: currency })
  },
  resetSelectedCurrency: () => set({ selectedCurrency: CURRENCY.dollar.name }),
}))
