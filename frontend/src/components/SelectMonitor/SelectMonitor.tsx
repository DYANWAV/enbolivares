import { ButtonHTMLAttributes } from 'react'
import { useMonitorsStore } from '../../store/monitorsStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'
import { MonitorName, MonitorsList } from '../../types'
import { cn } from '../../utils/cn'
import { DropDown } from '../DropDown/DropDown'
import { DropDownItem } from '../DropDown/DropDownItem'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectMonitor = ({ className, ...props }: Props) => {
  const monitorList = useMonitorsStore(x => x.monitorsData.monitors_list)
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
          label={monitorList?.[selectedMonitor]?.title}
          items={<Options monitorList={monitorList} onClick={onClick} />}
          {...props}
        />
      )}
    </>
  )
}

interface OptionsProps {
  monitorList: MonitorsList
  onClick: (monitor: MonitorName) => void
}

export const Options = ({ monitorList, onClick }: OptionsProps) => {
  return (
    <>
      {monitorList &&
        Object.entries(monitorList).map(([key, value]) => {
          return (
            <DropDownItem
              key={key}
              value={value.title}
              onClick={() => onClick(value.name)}
            />
          )
        })}
    </>
  )
}
