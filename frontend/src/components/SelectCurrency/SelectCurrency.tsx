import { ButtonHTMLAttributes } from 'react'
import { selectedCurrencyStore } from '../../store/selectedCurrencyStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'
import { CURRENCY, Currency } from '../../types.d'
import { cn } from '../../utils/cn'
import { DropDown } from '../DropDown/DropDown'
import { DropDownItem } from '../DropDown/DropDownItem'
import './SelectCurrency.css'

// export const SelectCurency: FC<SelectProps> = ({ className, ...props }) => {
//   const selectedCurrency = selectedCurrencyStore(x => x.selectedCurrency)
//   const changeSelectedCurrency = selectedCurrencyStore(x => x.changeCurrency)
//   const resetSelectedMonitor = useSelectedMonitorStore(
//     x => x.resetSelectedMonitor
//   )

//   return (
//     <select
//       className={cn('select', 'rounded-full', className)}
//       value={selectedCurrency}
//       onChange={e => {
//         changeSelectedCurrency(e.target.value as Currency)
//         resetSelectedMonitor()
//       }}
//       {...props}>
//       <option className="option" value={CURRENCY.dollar.name}>
//         {CURRENCY.dollar.title}
//       </option>
//       <option className="option" value={CURRENCY.euro.name}>
//         {CURRENCY.euro.title}
//       </option>
//     </select>
//   )
// }

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectCurrency = ({ className, ...props }: Props) => {
  const selectedCurrency = selectedCurrencyStore(x => x.selectedCurrency)
  const changeSelectedCurrency = selectedCurrencyStore(x => x.changeCurrency)
  const resetSelectedMonitor = useSelectedMonitorStore(
    x => x.resetSelectedMonitor
  )

  const changeCurrency = (currency: Currency) => {
    changeSelectedCurrency(currency)
    resetSelectedMonitor()
  }

  return (
    <>
      {selectedCurrency && (
        <DropDown
          className={cn(
            'select',
            'rounded-full min-w-[120px] max-w-[20px]',
            className
          )}
          label={CURRENCY[selectedCurrency].title}
          items={
            <>
              <DropDownItem
                onClick={() => changeCurrency(CURRENCY.dollar.name)}
                value={CURRENCY.dollar.title}
              />
              <DropDownItem
                onClick={() => changeCurrency(CURRENCY.euro.name)}
                value={CURRENCY.euro.title}
              />
            </>
          }
          {...props}
        />
      )}
    </>
  )
}
