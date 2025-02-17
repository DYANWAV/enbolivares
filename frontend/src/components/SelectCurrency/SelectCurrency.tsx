import { FC } from 'react'
import { selectedCurrencyStore } from '../../store/selectedCurrencyStore'
import { CURRENCY, Currency } from '../../types.d'
import { cn } from '../../utils/cn'
import { SelectProps } from '../SelectMonitor/SelectMonitor'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'

export const SelectCurency: FC<SelectProps> = ({ className, ...props }) => {
  const selectedCurrency = selectedCurrencyStore(x => x.selectedCurrency)
  const changeSelectedCurrency = selectedCurrencyStore(x => x.changeCurrency)
  const resetSelectedMonitor = useSelectedMonitorStore(
    x => x.resetSelectedMonitor
  )

  return (
    <select
      className={cn('select', 'rounded-full', className)}
      value={selectedCurrency}
      onChange={e => {
        changeSelectedCurrency(e.target.value as Currency)
        resetSelectedMonitor()
      }}
      {...props}>
      <option className="option" value={CURRENCY.dollar.name}>
        {CURRENCY.dollar.title}
      </option>
      <option className="option" value={CURRENCY.euro.name}>
        {CURRENCY.euro.title}
      </option>
    </select>
  )
}
