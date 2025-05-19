import { create } from 'zustand'
import { MONITOR_NAME, MonitorName } from '../types.d'

interface SelectedMonitorStoreType {
  selectedMonitor: MonitorName
  changeMonitor: (newMonitor: MonitorName) => void
  resetSelectedMonitor: () => void
}

export const useSelectedMonitorStore = create<SelectedMonitorStoreType>()(
  set => ({
    selectedMonitor: MONITOR_NAME.paralelo as MonitorName,
    changeMonitor: newMonitor => {
      set({ selectedMonitor: newMonitor })
    },
    resetSelectedMonitor: () =>
      set({ selectedMonitor: MONITOR_NAME.paralelo as MonitorName }),
  })
)
