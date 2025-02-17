import { useMonitorsStore } from '../../store/monitorsStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'

export const LastUpdate: React.FC = () => {
  const monitorsData = useMonitorsStore(x => x.monitorsData)
  const selectedMonitor = useSelectedMonitorStore(x => x.selectedMonitor)

  const lastUpdate = monitorsData.monitors?.[selectedMonitor]?.last_update

  return (
    <>
      <section>
        <p className="last_update">Última actualización</p>

        {!lastUpdate && <time>...Cargando</time>}
        {lastUpdate && (
          <time dateTime={lastUpdate} className="text-emerald-600">
            {lastUpdate}
          </time>
        )}
      </section>
    </>
  )
}
