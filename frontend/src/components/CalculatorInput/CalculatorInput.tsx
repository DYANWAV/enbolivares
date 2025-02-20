import { HTMLAttributes, useId } from 'react'
import { Currency, CURRENCY } from '../../types.d'
import { cn } from '../../utils/cn'
import { formatInputValue } from '../../utils/formatInputValue'
import { CopyButton } from '../CopyButton/CopyButton'
import { Input } from '../Input'
import './CalculatorInput.css'
import { HiddenInput } from './HiddenInput'
import { useFocusInput } from './useFocusInput'

interface Props extends HTMLAttributes<HTMLDivElement> {
  currencySymbol?: Currency
  value: string
  handleClick: (e: React.SyntheticEvent<HTMLInputElement>) => void
}

export const CalculatorInput = ({
  currencySymbol = CURRENCY.dollar.name,
  value,
  onChange,
  handleClick,
  className,
  ...props
}: Props) => {
  const { focusStyle, onBlur, onFocus } = useFocusInput()
  const inputID = useId()
  return (
    <div
      className={cn(
        'grid grid-cols-[auto_1fr_auto] gap-2 border-b transition',
        className,
        focusStyle
      )}
      {...props}>
      <label className="text-emerald-600" htmlFor={inputID}>
        {CURRENCY[currencySymbol].symbol}
      </label>

      <HiddenInput value={value} onChange={onChange} />

      <Input
        id={inputID}
        value={formatInputValue(value)}
        onChange={onChange}
        onClick={handleClick}
        aria-label="Campo numérico"
        className="currency_input"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <CopyButton currencySymbol={currencySymbol} value={value} />
    </div>
  )
}
