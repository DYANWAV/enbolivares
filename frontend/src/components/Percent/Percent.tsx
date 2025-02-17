import { useMonitorsStore } from '../../store/monitorsStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'
import { cn } from '../../utils/cn'
import { IconArrowDown, IconArrowUp } from '../Icons'

export const Percent: React.FC = () => {
  const monitors = useMonitorsStore(x => x.monitorsData)
  const selectedMonitor = useSelectedMonitorStore(x => x.selectedMonitor)

  const isUp = monitors.monitors?.[selectedMonitor]?.color === 'green'
  const percent = monitors.monitors?.[selectedMonitor]?.percent

  const className = isUp ? 'text-emerald-600' : 'text-rose-600'

  return (
    <section
      className={cn('flex gap-1 justify-center', className, 'font-semibold')}>
      {isUp && <IconArrowUp />}
      {!isUp && <IconArrowDown />}
      <span>{percent}%</span>
    </section>
  )
}
