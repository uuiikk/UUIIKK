import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import styles from './alert.module.css'
//import Image from 'next/image'

export const alertVariants = cva(styles.alert, {
	variants: {
		variant: {
			default: styles.alert_default,
			filled: styles.alert_filled,
			outlined: styles.alert_outlined,
		},
		action: {
			info: styles.alert_info,
			warning: styles.alert_warning,
			error: styles.alert_error,
			success: styles.alert_success,
		},
	},
	defaultVariants: {
		variant: 'default',
		action: 'info',
	},
})

const alertLabel = (action: unknown) => {
	switch (action) {
		case 'info':
			return 'Information'
		case 'warning':
			return 'Warning'
		case 'error':
			return 'Error'
		case 'success':
			return 'Success'
		default:
			return 'Information'
	}
}

const alertDesc = (action: unknown) => {
	switch (action) {
		case 'info':
			return 'This is a info alert!'
		case 'warning':
			return 'This is a warning alert!'
		case 'error':
			return 'This is a error alert!'
		case 'success':
			return 'This is a success alert!'
		default:
			return 'This is a info alert!'
	}
}


export interface AlertProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof alertVariants> {
            onClick?: () => void;
	label?: string
	desc?: string
}

export const Alert: React.FC<AlertProps> = ({ variant, action, ...props }) => {
	return (
		<div id='alert' className={alertVariants({ variant, action })}>
			<div></div>
			<label>{props.label ? props.label : alertLabel(action)}</label>
			<label>{props.desc ? props.desc : alertDesc(action)}</label>
			<button onClick={props.onClick} />
		</div>
	)
}

//SHADCN//////////////////////////////////////////////////////////////////////////////////////////////////////
// const Alert = React.forwardRef<
// 	HTMLDivElement,
// 	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
// >(({ className, variant, ...props }, ref) => (
// 	<div
// 		ref={ref}
// 		role='alert'
// 		className={(alertVariants({ variant }), className)}
// 		{...props}
// 	/>
// ))
// Alert.displayName = 'Alert'

// const AlertTitle = React.forwardRef<
// 	HTMLParagraphElement,
// 	React.HTMLAttributes<HTMLHeadingElement>
// >(({ className, ...props }, ref) => (
// 	<h5
// 		ref={ref}
// 		className={('mb-1 font-medium leading-none tracking-tight', className)}
// 		{...props}
// 	/>
// ))
// AlertTitle.displayName = 'AlertTitle'

// const AlertDescription = React.forwardRef<
// 	HTMLParagraphElement,
// 	React.HTMLAttributes<HTMLParagraphElement>
// >(({ className, ...props }, ref) => (
// 	<div
// 		ref={ref}
// 		className={('text-sm [&_p]:leading-relaxed', className)}
// 		{...props}
// 	/>
// ))
// AlertDescription.displayName = 'AlertDescription'

// export { Alert, AlertTitle, AlertDescription }
