// components/DraggableButton.tsx
import React, { ReactNode } from 'react'
import styles from './ComponentContainer.module.css'

interface ComponentContainerProps {
	element: ReactNode
	name?: string
	onDragStart: (e: React.DragEvent, componentType?: string) => void
	onDragEnd?: (e: React.DragEvent, position: { x: number; y: number }) => void
}

const ComponentContainer: React.FC<ComponentContainerProps> = ({
	...props
}) => {

	return (
		<div className={styles.container} draggable onDragStart={e => props.onDragStart(e, props.name)} onDragEnd={e => props.onDragEnd}>
			{props.element}
			{props.name}
		</div>
	)
	
}

export default ComponentContainer
