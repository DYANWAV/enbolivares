import { ButtonHTMLAttributes } from 'react'
import { useMonitorsStore } from '../../store/monitorsStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'
import { MonitorName, Monitors } from '../../types'
import { cn } from '../../utils/cn'
import { DropDown } from '../DropDown/DropDown'
import { DropDownItem } from '../DropDown/DropDownItem'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectMonitor = ({ className, ...props }: Props) => {
  const monitorList = useMonitorsStore(x => x.monitorsData.monitors)
  const selectedMonitor = useSelectedMonitorStore(x => x.selectedMonitor)
  const changeMonitor = useSelectedMonitorStore(x => x.changeMonitor)

  const onClick = (newMonitor: MonitorName) => {
    changeMonitor(newMonitor)
  }

  return (
    <>
      {selectedMonitor && (
        <DropDown
          className={cn('min-w-max', className)}
          label={selectedMonitor}
          items={<Options monitorList={monitorList} onClick={onClick} />}
          {...props}
        />
      )}
    </>
  )
}

interface OptionsProps {
  monitorList: Monitors
  onClick: (monitor: MonitorName) => void
}

export const Options = ({ monitorList, onClick }: OptionsProps) => {
  return (
    <>
      {monitorList &&
        Object.entries(monitorList).map(([key]) => {
          return (
            <DropDownItem
              key={key}
              value={key}
              onClick={() => onClick(key as MonitorName)}
            />
          )
        })}
    </>
  )
}
