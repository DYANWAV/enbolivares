import { Currency, MonitorsData } from '../types'
const API_URL = import.meta.env.VITE_ENBOLIVARES_API_URL

export class PyDolar {
  static PYDOLAR_URL = API_URL

  static async getMonitors(currency: Currency) {
    const res = await fetch(`${this.PYDOLAR_URL}/${currency}`)
    const monitors = (await res.json()) as MonitorsData
    return monitors
  }
}
