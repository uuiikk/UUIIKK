import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark,
		},
		options: {
			storySort: { method: 'alphabetical', order: [] },
		},
		backgrounds: {
			values: [
				{ name: 'light', value: '#fff' },
				{ name: 'dark', value: '#252525' },
			],
			default: 'dark',
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
