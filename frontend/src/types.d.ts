export const MONITOR_NAME = {
  amazon_gift_card: 'amazon_gift_card',
  bcv: 'bcv',
  binance: 'binance',
  cripto_euro: 'cripto_euro',
  paralelo: 'enparalelovzla',
  euro_today: 'euro_today',
  paypal: 'paypal',
  promedio: 'promedio',
  skrill: 'skrill',
  uphold: 'uphold',
} as const

export const MONITOR_TITLE = {
  amazon_gift_card: 'Amazon Gift Card',
  bcv: 'BCV',
  binance: 'Binance',
  cripto_euro: 'Cripto Euro',
  paralelo: 'Paralelo',
  euro_today: 'Euro Today',
  paypal: 'Paypal',
  promedio: 'Promedio',
  skrill: 'Skrill',
  uphold: 'Uphold',
} as const

export const CURRENCY = {
  dollar: {
    name: 'dollar',
    title: 'USD',
    symbol: '$',
  },
  euro: {
    name: 'euro',
    title: 'EUR',
    symbol: '€',
  },
  bolivar: {
    name: 'bolivar',
    title: 'VES',
    symbol: 'Bs',
  },
} as const

// export type MonitorsData = {
//   monitors_list: MonitorsList
//   monitors: Monitors
// }

// export type MonitorsData = {
//   datetime: {
//     date: string
//     time: string
//   }
//   monitors: {
//     bcv: {
//       change: number
//       color: 'green' | 'red'
//       last_update: string
//       percent: number
//       price: number
//       symbol: '▲' | '▼'
//       title: string
//     }
//     enparalelovzla: {
//       change: number
//       color: 'green' | 'red'
//       last_update: string
//       percent: number
//       price: number
//       symbol: '▲' | '▼'
//       title: string
//     }
//   }
// }

export type MonitorsData = {
  datetime: {
    date: string
    time: string
  }
  monitors: Monitors
}

export type PyDolarError = {
  error: string
  message: string
}

export type Monitors = Record<MonitorName, Monitor>

export interface Monitor {
  color: string
  image: string
  last_update: string
  percent: number
  price: number
  old_price: number
  title: MonitorTitle
}

export type MonitorName = keyof typeof MONITOR_NAME
export type MonitorTitle = (typeof MONITOR_TITLE)[keyof typeof MONITOR_TITLE]

export interface MonitorNameInfo {
  name: MonitorName
  title: MonitorTitle
}

export type MonitorsList = Record<MonitorName, MonitorNameInfo>

export type Currency = keyof typeof CURRENCY

export type CurrencySymbol = (typeof CURRENCY)[Currency]['symbol']
