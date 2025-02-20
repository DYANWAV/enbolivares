import { HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface Props extends HTMLAttributes<HTMLDivElement> {
  open: boolean
}

export const DropdownContent = ({
  open = false,
  className,
  children,
  ...props
}: Props) => {
  return (
    <div
      className={cn(
        'border',
        open ? '' : 'opacity-0 pointer-events-none',
        open ? 'shadow-2xl shadow-black/40' : '',
        'rounded-sm',
        'border-gray',
        'bg-[var(--bg-color)]',
        'absolute left-0 mt-4 min-w-full flex flex-col items-center max-h-[45vh] overflow-y-scroll [-ms-overflow-style:_none] ',
        '[&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0',
        className
      )}
      {...props}>
      <>{open && children}</>
    </div>
  )
}

export default DropdownContent
