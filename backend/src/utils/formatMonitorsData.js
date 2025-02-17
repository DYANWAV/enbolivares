import { MONITORS_TITLES } from '../config.js'

export const formatMonitorsData = monitorsData => {
  const { monitors } = monitorsData

  const formatted = {}
  const monitors_list = {}

  Object.entries(monitors).forEach(([key, value]) => {
    const { monitorKey, monitorTitle } = formatMonitorTitle(key, value.title)

    formatted[monitorKey] = {
      color: value.color,
      image: value.image,
      last_update: value.last_update,
      percent: value.percent,
      price: value.price,
      old_price: value.price_old,
      title: monitorTitle,
    }

    monitors_list[monitorKey] = { name: monitorKey, title: monitorTitle }
  })

  return {
    monitors_list,
    monitors: formatted,
  }
}

function formatMonitorTitle(monitorKey, monitorTitle) {
  if (monitorTitle === 'Dólar estadounidense')
    monitorTitle = MONITORS_TITLES.bcv
  if (monitorTitle === 'EnParaleloVzla') {
    monitorTitle = MONITORS_TITLES.paralelo
    monitorKey = 'paralelo'
  }

  return {
    monitorKey,
    monitorTitle,
  }
}
