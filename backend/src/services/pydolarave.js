import {
  BAD_REQUEST,
  CURRENCIES,
  CURRENCY_NOT_FOUND_MESSAGE,
  PYDOLARVE_URL,
} from '../config.js'
import { formatMonitorsData } from '../utils/formatMonitorsData.js'

export class PyDolar {
  static PYDOLARVE_URL = PYDOLARVE_URL

  static async monitorsData({ currency }) {
    if (!CURRENCIES.includes(currency))
      return {
        error: BAD_REQUEST,
        message: CURRENCY_NOT_FOUND_MESSAGE(currency),
      }

    const res = await fetch(`${this.PYDOLARVE_URL}/${currency}`)
    const monitorsData = await res.json()

    if (monitorsData.error) return monitorsData

    return formatMonitorsData(monitorsData)
  }
}
