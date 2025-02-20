import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import './DropDown.css'

interface Props extends HTMLAttributes<HTMLDivElement> {
  value?: string
  onClick: () => void
}

export const DropDownItem = ({
  value,
  onClick,
  className,
  ...props
}: Props) => {
  return (
    <>
      <div
        onClick={onClick}
        className={cn(
          'text-left font-semibold *:font-semibold text-emerald-600 select-none hover:text-emerald-400 px-4 py-1 hover:bg-emerald-950 w-full transition',
          className
        )}
        {...props}>
        {value}
      </div>
    </>
  )
}
