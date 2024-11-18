import React, { LegacyRef, ReactElement, ReactNode, useEffect, useState } from 'react'
import styles from './TargetArea.module.css'
import { Button } from '../Button/Button'

const TargetArea: React.FC = () => {
	const [componentId, setComponentId] = useState<string[]>([])
	const [components, setComponents] = useState<React.ReactNode[]>([])
	let compId: string

	const handleDragOver = (event: React.DragEvent) => {
		event.preventDefault()
	}

	const handleDrop = (event: React.DragEvent) => {
		compId = event.dataTransfer.getData('text/plain')
		console.log(event)
		setComponentId(prev => [...prev , compId])
		const componentType = event.dataTransfer.getData(
			'application/reactcomponent'
		)
		switch (componentType) {
			case 'Button':
				setComponents(prev => [
					...prev,
					<Button
						key={prev.length}
						position={{
							x: event.clientX,
							y: event.clientY,
						}}
					/>,
				])
				break
			default:
				break
		}
	}
	useEffect(() => {
        console.log(componentId)
    }, [componentId])

	return (
		<div
			className={styles.targetArea}
			onDrop={handleDrop}
			onDragOver={handleDragOver}
		>
			{components}
		</div>
	)
}

export default TargetArea
