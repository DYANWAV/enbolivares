import { useEffect, useState } from 'react'
import { Currency, CURRENCY } from '../../types.d'
import { formatInputValue } from '../../utils/formatInputValue'

export const useCopyButton = (value: string, currencySymbol: Currency) => {
  const [isCopied, setIsCopied] = useState(false)

  const onClick = () => {
    navigator.clipboard.writeText(
      `${formatInputValue(value)} ${CURRENCY[currencySymbol].symbol}`
    )
    setIsCopied(true)
  }

  const isCopiedStyle = isCopied
    ? 'text-emerald-600 hover:text-emerald-600'
    : 'text-white/20 hover:text-white-500'

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsCopied(false)
    }, 4000)

    return () => clearTimeout(timeoutID)
  }, [isCopied])

  return {
    isCopied,
    onClick,
    isCopiedStyle,
  }
}
