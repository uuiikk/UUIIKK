/* eslint-disable @typescript-eslint/no-unused-expressions */
import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './alert'
import style from './story.module.css'
import { useState } from 'react'
import React from 'react'
import { Controls, Primary, Stories, Title } from '@storybook/blocks'

const MyDocs = () => {
	const [components, setComponents] = useState([<></>]) // Начальное состояние пустое

	const handleAddComponent = (
		variant: 'default' | 'filled' | 'outlined' | null | undefined,
		action: 'info' | 'warning' | 'error' | 'success' | null | undefined
	) => {
		console.log(components.length)
		setComponents([
			<Alert
				variant={variant}
				action={action}
				key={0}
				onClick={deleteComponent}
			/>,
		])
		console.log(components.length)
	}

	const deleteComponent = () => {
		setComponents(components.splice(1, 1))
		console.log(components.length)
	}

	return (
		<>
			<Title />
			<Primary />
			<Controls />
			<Stories />
			<Title>Пример использования</Title>
			<div id='body' className={style.body}>
				{components.map((component, index) => (
					<React.Fragment key={index}>{component}</React.Fragment>
				))}
				<div className={style.buttons}>
					<button onClick={() => handleAddComponent('default', 'info')}>
						Info
					</button>
					<button onClick={() => handleAddComponent('default', 'warning')}>
						Warning
					</button>
					<button onClick={() => handleAddComponent('default', 'error')}>
						Error
					</button>
					<button onClick={() => handleAddComponent('default', 'success')}>
						Success
					</button>
				</div>
			</div>
		</>
	)
}

const meta: Meta<typeof Alert> = {
	title: 'Компоненты/Уведомление',
	component: Alert,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
		docs: {
			page: MyDocs,
		},
	},
	argTypes: {
		variant: {
			name: 'Вариант уведомления',
			control: 'select',
			options: ['default', 'filled', 'outlined'],
		},
		action: {
			name: 'Тип уведомления',
			control: 'select',
			options: ['info', 'warning', 'error', 'success'],
		},
		label: {
			name: 'Заголовок уведомления',
			control: 'text',
		},
		desc: {
			name: 'Текст уведомления',
			control: 'text',
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
export const Warning: Story = {
	name: 'Предупреждение',
	args: {
		variant: 'default',
		action: 'warning',
	},
}
export const Error: Story = {
	name: 'Ошибка',
	args: {
		variant: 'default',
		action: 'error',
	},
}
export const Success: Story = {
	name: 'Успешно',
	args: {
		variant: 'default',
		action: 'success',
	},
}
