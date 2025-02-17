import { HTMLAttributes } from 'react'
import { CalculatorInput } from '../CalculatorInput/CalculatorInput'
import { cn } from '../../utils/cn'
import { useCalculatorInput } from '../CalculatorInput/useCalculatorInput'
import { CURRENCY } from '../../types.d'

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const InputsContainer = ({ className, ...props }: Props) => {
  const {
    bolivarValue,
    usdValue,
    changeBolivarValue,
    changeUSDValue,
    handleClick,
  } = useCalculatorInput()

  return (
    <div className={cn('flex flex-col text-2xl gap-2', className)} {...props}>
      <CalculatorInput
        handleClick={handleClick}
        value={usdValue}
        onChange={changeUSDValue}
      />
      <CalculatorInput
        handleClick={handleClick}
        value={bolivarValue}
        onChange={changeBolivarValue}
        currencySymbol={CURRENCY.bolivar.name}
      />
    </div>
  )
}
