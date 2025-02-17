import { create } from 'zustand'
import { MONITOR_NAME, MonitorName } from '../types.d'

interface SelectedMonitorStoreType {
  selectedMonitor: MonitorName
  changeMonitor: (e: React.ChangeEvent<HTMLSelectElement>) => void
  resetSelectedMonitor: () => void
}

export const useSelectedMonitorStore = create<SelectedMonitorStoreType>()(
  set => ({
    selectedMonitor: MONITOR_NAME.paralelo,
    changeMonitor: (e: React.ChangeEvent<HTMLSelectElement>) => {
      set({ selectedMonitor: e.target.value as MonitorName })
    },
    resetSelectedMonitor: () => set({ selectedMonitor: MONITOR_NAME.paralelo }),
  })
)
