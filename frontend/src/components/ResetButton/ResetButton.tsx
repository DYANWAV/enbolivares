import { ButtonHTMLAttributes } from 'react'
import { selectedCurrencyStore } from '../../store/selectedCurrencyStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'
import { CURRENCY, MONITOR_NAME } from '../../types.d'
import { cn } from '../../utils/cn'
import { IconRefresh } from '../Icons'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ResetButton: React.FC<ButtonProps> = ({ className, ...props }) => {
  const selectedMonitor = useSelectedMonitorStore(x => x.selectedMonitor)
  const resetSelectedMonitor = useSelectedMonitorStore(
    x => x.resetSelectedMonitor
  )
  const selectedCurrency = selectedCurrencyStore(x => x.selectedCurrency)
  const resetSelectedCurrency = selectedCurrencyStore(
    x => x.resetSelectedCurrency
  )

  const resetCalculatorState = () => {
    resetSelectedCurrency()
    resetSelectedMonitor()
  }

  return (
    <button
      className={cn(
        'hover:cursor-pointer hover:text-white transition',
        'disabled:cursor-default disabled:text-white-500/30',
        'rounded-sm text-white-500',
        className
      )}
      disabled={
        selectedMonitor === MONITOR_NAME.paralelo &&
        selectedCurrency === CURRENCY.dollar.name
      }
      onClick={resetCalculatorState}
      {...props}
    >
      <IconRefresh />
    </button>
  )
}
