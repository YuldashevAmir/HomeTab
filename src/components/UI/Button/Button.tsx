import { ButtonHTMLAttributes, FC } from 'react'
import './button.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<button {...props}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span className='flex justify-center items-center'>{children}</span>
		</button>
	)
}
