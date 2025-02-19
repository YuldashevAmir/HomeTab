import { ButtonHTMLAttributes, FC } from 'react'
import './Button.css'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<button className='w-20 h-16 md:w-24 md:h-20 lg:w-28 lg:h-24' {...props}>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span className='flex justify-center items-center'>{children}</span>
		</button>
	)
}
