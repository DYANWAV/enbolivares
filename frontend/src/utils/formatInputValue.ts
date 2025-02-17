export const formatInputValue = (value: string) => {
  const result = (+value / 100).toFixed(2)

  return result
}

export const multiplyBy100 = (value: number, multiply = 100) => {
  return Math.round(value * multiply)
}
