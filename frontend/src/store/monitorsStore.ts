import { create } from 'zustand'
import { PyDolar } from '../services/pydolar'
import { Currency, MonitorsData } from '../types'

interface MonitorsState {
  monitorsData: MonitorsData
  fetchMonitors: (currency: Currency) => void
}

export const useMonitorsStore = create<MonitorsState>()(set => ({
  monitorsData: {} as MonitorsData,
  fetchMonitors: async currency => {
    const monitorsData = await PyDolar.getMonitors(currency)

    set({ monitorsData })
  },
}))
