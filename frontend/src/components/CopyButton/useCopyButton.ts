import { useEffect, useState } from 'react'
import { formatInputValue } from '../../utils/formatInputValue'
import { Currency, CURRENCY } from '../../types.d'

export const useCopyButton = (value: string, currencySymbol: Currency) => {
  const [isCopied, setIsCopied] = useState(false)

  const onClick = () => {
    navigator.clipboard.writeText(
      `${formatInputValue(value)} ${CURRENCY[currencySymbol].symbol}`
    )
    setIsCopied(true)
  }

  const isCopiedStyle = isCopied ? 'is_copied' : 'is_not_copied'

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
