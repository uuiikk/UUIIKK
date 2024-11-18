import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import styles from './button.module.css'

export const buttonVariants = cva(styles.button, {
	variants: {
		variant: {
			default: styles.button_default,
			destructive: styles.button_destructive,
			outline: styles.button_outline,
			ghost: styles.button_ghost,
			link: styles.button_link,
		},
		size: {
			default: styles.button_size_default,
			sm: styles.button_size_small,
			md: styles.button_size_medium,
			lg: styles.button_size_large,
			icon: styles.button_size_icon,
		},
	},
	defaultVariants: {
		variant: 'default',
		size: 'default',
	},
})

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
			onClick?: () => void;
			position?: {x: number, y: number}
	label?: string
}

export const Button: React.FC<ButtonProps> = ({ variant, size, label="Моя кнопка", position={x: 0 , y: 0}, className, onClick ,...props }) => {
	return (
		<button style={{position: 'absolute' , left: position.x , top: position.y }} className={buttonVariants({ variant, size, className })} onClick={onClick}{...props}>
			{size == 'icon' ? '' : label}
		</button>
	)
}

Button.displayName = 'Button'
