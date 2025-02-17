import { BCV, OFICIAL } from './config.js'

export function formatAPIresponse(data) {
  const monitorsData = {}

  data.forEach(x => {
    if (x.fuente === OFICIAL) {
      x.fuente = BCV
      x.nombre = BCV.toUpperCase()
    }

    monitorsData[x.fuente] = {
      monitor: x.fuente,
      name: x.nombre,
      average: x.promedio.toFixed(2),
      last_update: x.fechaActualizacion,
    }
  })

  return monitorsData
}
