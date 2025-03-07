import { useEffect } from 'react'
import './App.css'
import { InputsContainer } from './components/InputsContainer/InputsContainer'
import { LastUpdate } from './components/LastUpdate/LastUpdate'
import { Percent } from './components/Percent/Percent'
import { ResetButton } from './components/ResetButton/ResetButton'
import { SelectCurrency } from './components/SelectCurrency/SelectCurrency'
import { SelectMonitor } from './components/SelectMonitor/SelectMonitor'
import { APP_TITLE, CALCULATOR_TITLE } from './config'
import { useMonitorsStore } from './store/monitorsStore'
import { selectedCurrencyStore } from './store/selectedCurrencyStore'

function App() {
  const fetchMonitors = useMonitorsStore(x => x.fetchMonitors)
  const selectedCurrency = selectedCurrencyStore(x => x.selectedCurrency)

  useEffect(() => {
    fetchMonitors(selectedCurrency)
  }, [fetchMonitors, selectedCurrency])

  return (
    <>
      <h1
        translate="no"
        className="text-3xl md:text-4xl font-medium text-emerald-600"
      >
        {APP_TITLE}
      </h1>

      <article className="calculator_container">
        <header className="flex justify-between">
          <h2 className="text-xl md:text-2xl text-left font-medium text-white">
            {CALCULATOR_TITLE}
          </h2>
          <ResetButton />
        </header>

        <div translate="no" className="flex justify-between gap-4">
          <SelectMonitor />
          <SelectCurrency />
        </div>

        <InputsContainer />

        <Percent />
      </article>
      <LastUpdate />
    </>
  )
}

export default App
