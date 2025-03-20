import { ButtonHTMLAttributes, useState } from 'react'
import { cn } from '../../utils/cn'
import { IconChevronDown, IconChevronUp } from '../Icons'
import DropdownContent from './DropDownContent'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  items?: React.ReactNode | React.ReactNode[]
}

export const DropDown = ({ label, items, className, ...props }: Props) => {
  const [open, setOpen] = useState(false)

  const onClick = () => {
    setOpen(!open)
  }

  const onBlur = () => setOpen(false)

  return (
    <>
      <button
        onClick={onClick}
        onBlur={onBlur}
        className={cn(
          'cursor-pointer bg-dark-gray rounded-sm relative',
          'font-semibold *:font-semibold',
          'w-full min-w-[140px] max-w-[210px] text-emerald-600 ',
          'px-3 py-1 md:px-4 md:py-2 border border-gray',
          'text-sm md:text-base',
          className
        )}
        {...props}
      >
        <span className="flex transition justify-between hover:text-emerald-400 hover:border-white/15 items-center">
          {label} {!open && <IconChevronDown />} {open && <IconChevronUp />}
        </span>

        <DropdownContent open={open}>{items}</DropdownContent>
      </button>
    </>
  )
}
