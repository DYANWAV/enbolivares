import { HTMLAttributes } from 'react'
import { CURRENCY } from '../../types.d'
import { cn } from '../../utils/cn'
import { CalculatorInput } from '../CalculatorInput/CalculatorInput'
import { useCalculatorInput } from '../CalculatorInput/useCalculatorInput'

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
