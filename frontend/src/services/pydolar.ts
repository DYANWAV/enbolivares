import { Currency, MonitorsData } from '../types'

export class PyDolar {
  static PYDOLAR_URL = 'http://localhost:3000'

  static async getMonitors(currency: Currency) {
    const res = await fetch(`${this.PYDOLAR_URL}/${currency}`)
    const monitors = (await res.json()) as MonitorsData
    return monitors
  }
}
