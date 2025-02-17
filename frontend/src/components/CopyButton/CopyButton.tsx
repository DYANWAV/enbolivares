import { ButtonHTMLAttributes } from 'react'
import { Currency, CURRENCY } from '../../types.d'
import { cn } from '../../utils/cn'
import { IconChecks, IconClipboard } from '../Icons'
import { useCopyButton } from './useCopyButton'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  currencySymbol: Currency
}

export const CopyButton = ({
  value,
  currencySymbol = CURRENCY.dollar.name,
  className,
  ...props
}: Props) => {
  const { isCopied, isCopiedStyle, onClick } = useCopyButton(
    value,
    currencySymbol
  )

  return (
    <button
      onClick={onClick}
      className={cn('copy_button', className, isCopiedStyle)}
      {...props}>
      {!isCopied && <IconClipboard />}
      {isCopied && <IconChecks />}
    </button>
  )
}
