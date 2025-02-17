import { FC, SelectHTMLAttributes } from 'react'
import { useMonitorsStore } from '../../store/monitorsStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'
import { MonitorsList } from '../../types'
import { cn } from '../../utils/cn'

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const SelectMonitor: FC<SelectProps> = ({ className, ...props }) => {
  const monitorsData = useMonitorsStore(x => x.monitorsData)
  const selectedMonitor = useSelectedMonitorStore(x => x.selectedMonitor)
  const changeMonitor = useSelectedMonitorStore(x => x.changeMonitor)

  return (
    <>
      {selectedMonitor && (
        <select
          value={selectedMonitor}
          onChange={changeMonitor}
          name="monitor"
          id="monitor"
          className={cn(
            'select',
            'rounded-md min-w-[140px] w-full max-w-[210px]',
            className
          )}
          {...props}>
          <MonitorOptions monitorsList={monitorsData.monitors_list} />
        </select>
      )}
    </>
  )
}

interface Props {
  monitorsList: MonitorsList
}

function MonitorOptions({ monitorsList }: Props) {
  return (
    <>
      {monitorsList &&
        Object.entries(monitorsList).map(([key, value]) => (
          <option className="option" key={key} value={value.name}>
            {value.title}
          </option>
        ))}
    </>
  )
}
