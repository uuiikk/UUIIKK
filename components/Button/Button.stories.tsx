import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
	title: 'Компоненты/Кнопка',
	component: Button,
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
			options: ['default', 'destructive', 'outline', 'ghost', 'link'],
		},
		size: {
			name: 'Размер кнопки',
			control: 'select',
			options: ['default', 'sm', 'md', 'lg', 'icon'],
		},
		label: {
			name: 'Текст кнопки',
			control: 'text',
			description: 'Текст, который будет отображаться внутри кнопки',
			if: { arg: 'size', neq: 'icon' },
		},
	},
	args: {
		variant: 'default',
		size: 'default',
		label: 'Кнопка',
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'По умолчанию',
}
export const Destructive: Story = {
	name: 'Кнопка удалить',
	args: {
		variant: 'destructive',
		size: 'default',
		label: 'Удалить',
	},
}
export const Outline: Story = {
	name: 'Контурная кнопка',
	args: {
		variant: 'outline',
		size: 'default',
	},
}
export const Ghost: Story = {
	name: 'Прозрачная кнопка',
	args: {
		variant: 'ghost',
		size: 'default',
	},
}
export const Link: Story = {
	name: 'Ссылочная кнопка',
	args: {
		variant: 'link',
		size: 'default',
	},
}
export const Icon: Story = {
	name: 'Кнопка в виде иконки',
	args: {
		variant: 'default',
		size: 'icon',
	},
}
