import { HTMLAttributes } from 'react'

type HeaderProps = HTMLAttributes<HTMLDivElement>

export function Header({ children }: HeaderProps) {
  return (
	  <header className="w-full flex items-center justify-between">
		  { children }
		</header>
	)
}
