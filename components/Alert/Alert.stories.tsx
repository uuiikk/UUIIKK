import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './alert'

const meta: Meta<typeof Alert> = {
	title: 'Компоненты/Уведомление',
	component: Alert,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	argTypes: {
		variant: {
			name: 'Вариант кнопки',
			control: 'select',
			options: ['default', 'filled', 'outline'],
		},
		action: {
			name: 'Вариант кнопки',
			control: 'select',
			options: ['info', 'error', 'warning', 'success'],
		},
	},
	args: {
		variant: 'default',
		action: 'info',
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {
	name: 'Информация',
}
export const Error: Story = {
	name: 'Ошибка',
	args: {
		variant: 'default',
		action: 'error',
	},
}
export const Warning: Story = {
	name: 'Предупреждение',
	args: {
		variant: 'default',
		action: 'warning',
	},
}
export const Success: Story = {
	name: 'Успешно',
	args: {
		variant: 'default',
		action: 'success',
	},
}
