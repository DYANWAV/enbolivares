import { useState } from 'react'

export const useFocusInput = () => {
  const [focus, setFocus] = useState(false)

  const onFocus = () => {
    setFocus(prev => {
      return !prev
    })
  }

  const onBlur = () => {
    setFocus(!focus)
  }

  const focusStyle = focus
    ? 'border-emerald-600 hover:border-emerald-600'
    : 'border-gray hover:border-white/20'
  return {
    onFocus,
    onBlur,
    focusStyle,
  }
}
