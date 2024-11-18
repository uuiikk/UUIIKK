'use client'
import LeftPanel from './components/LeftPanel/LeftPanel'
import styles from './styles/Home.module.css'
import TargetArea from './components/TargetArea/TargetArea'
import { Button } from './components/Button/Button'

const Home: React.FC = () => {
	const clear = () => {
		console.log('clear')
	}
	return (
		<div className={styles.page}>
			<LeftPanel />
			<TargetArea/>
			<Button
				label='Очистить'
				className={styles.buttonClear}
				variant={'destructive'}
				onClick={clear}
			/>
			<Button
				label='Скачать'
				className={styles.buttonDownload}
				onClick={clear}
			/>
		</div>
	)
}

export default Home
