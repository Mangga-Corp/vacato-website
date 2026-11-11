import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { buttonStyles, type ButtonSize, type ButtonVariant } from './buttonStyles'

interface CommonProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

export function Button(props: AnchorProps | NativeButtonProps) {
  if (props.href !== undefined) {
    const { variant, size, className, ...rest } = props
    return <a {...rest} className={buttonStyles(variant, size, className)} />
  }
  const { variant, size, className, type = 'button', ...rest } = props
  return <button {...rest} type={type} className={buttonStyles(variant, size, className)} />
}
