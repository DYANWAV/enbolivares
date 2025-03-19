import { useEffect, useState } from 'react'
import { useMonitorsStore } from '../../store/monitorsStore'
import { useSelectedMonitorStore } from '../../store/selectedMonitorStore'
import { multiplyBy100 } from '../../utils/formatInputValue'

export const useCalculatorInput = () => {
  const monitors = useMonitorsStore(x => x.monitorsData)
  const selectedMonitor = useSelectedMonitorStore(x => x.selectedMonitor)

  const price = monitors.monitors?.[selectedMonitor]?.price

  const [usdValue, setUSDValue] = useState('100')
  const [bolivarValue, setBolivarValue] = useState(
    multiplyBy100(price, +usdValue).toString()
  )

  const ONLY_NUMBERS = /[^0-9]/g

  const changeBolivarValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const bolivarInputValue = e.target.value.replace(ONLY_NUMBERS, '')
    setBolivarValue(bolivarInputValue)
    setUSDValue(() => {
      if (+bolivarInputValue <= 0) {
        return '0'
      }
      return multiplyBy100(+bolivarInputValue / 100 / price).toString()
    })
  }

  const changeUSDValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdInputValue = e.target.value.replace(ONLY_NUMBERS, '')
    setUSDValue(usdInputValue)
    setBolivarValue(multiplyBy100(price, +usdInputValue).toString())
  }

  const handleClick = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    target.selectionEnd = target.value.length
    target.selectionStart = target.value.length
    target.value = '0.00'
  }

  useEffect(() => {
    if (price === undefined) {
      setBolivarValue('0')
      return
    }

    setUSDValue('100')

    setBolivarValue(multiplyBy100(price).toString())
  }, [monitors, selectedMonitor, price])

  return {
    bolivarValue,
    usdValue,
    changeBolivarValue,
    changeUSDValue,
    handleClick,
  }
}
