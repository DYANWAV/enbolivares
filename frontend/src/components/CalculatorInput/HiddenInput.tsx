import { InputHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const HiddenInput = ({ className, ...props }: Props) => {
  return (
    <input
      {...props}
      className={cn('absolute top-0 pointer-events-none opacity-0', className)}
    />
  )
}
