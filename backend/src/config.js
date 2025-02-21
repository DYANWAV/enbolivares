process.loadEnvFile()

export const { PYDOLARVE_URL, PORT = 3000 } = process.env

export const OFICIAL = 'oficial'
export const BCV = 'bcv'
export const PARALELO = 'paralelo'
export const BITCOIN = 'bitcoin'

export const MONITORS_NAMES = {
  bcv: 'bcv',
  paralelo: 'paralelo',
  bitcoin: 'bitcoin',
  oficial: 'oficial',
}

export const MONITORS_TITLES = {
  bcv: 'BCV',
  paralelo: 'Paralelo',
}

export const CURRENCIES = ['dollar', 'euro']

export const BAD_REQUEST = 'BAD REQUEST'
export const UNEXPECTED_ERROR = 'Hubo un error inesperado. Intente más tarde.'
export const CURRENCY_NOT_FOUND_MESSAGE = currency =>
  `No se encuentra la moneda ${currency}`
