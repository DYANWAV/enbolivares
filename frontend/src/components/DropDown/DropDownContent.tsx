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
        'transition-all h-0 duration-300 [transition-timing-function:cubic-bezier(0.69,-0.04,0.17,1.67)] [interpolate-size:_allow-keywords]',
        'border',
        open ? 'h-auto duration-300 transition-all' : 'pointer-events-none',
        open ? 'opacity-100' : 'opacity-0',
        open ? 'shadow-2xl shadow-black/40' : '',
        'rounded-sm',
        'bg-[var(--bg-color)]',
        'border-gray',
        'absolute left-0 mt-4 min-w-full flex gap-1 flex-col items-center max-h-[45vh] overflow-y-scroll [-ms-overflow-style:_none] ',
        '[&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0',
        'p-1',
        className
      )}
      {...props}
    >
      <>{children}</>
    </div>
  )
}

export default DropdownContent
