import React from 'react'
import styles from './LeftPanel.module.css'
import ComponentContainer from '../ComponentContainer/ComponentContainer'
import { Button } from '../Button/Button'

const LeftPanel: React.FC = () => {
	const handleDragStart = (
		e: React.DragEvent,
		id: string,
		component?: string
	) => {
		e.dataTransfer.setData(
			'application/reactcomponent',
			component ? component : 'default'
		)
		e.dataTransfer.setData('text/plain', id)
	}

	return (
		<div className={styles.sidebar}>
			<h2 style={{ marginBottom: '20px' }}>Components</h2>
			<hr />
			<div className={styles.components}>
				<ComponentContainer
					onDragStart={e => handleDragStart(e, 'ButtonDefault', Button.displayName)}
					element={<Button label={'Моя кнопка'} />}
					name={Button.displayName}
				/>
			</div>
		</div>
	)
}

export default LeftPanel
