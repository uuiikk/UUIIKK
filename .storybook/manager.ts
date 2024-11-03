import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

addons.setConfig({
	theme: themes.dark,
	navSize: 500,
	bottomPanelHeight: 300,
	rightPanelWidth: 600,
	panelPosition: 'right',
	enableShortcuts: true,
	showToolbar: true,
	selectedPanel: undefined,
	initialActive: 'sidebar',
	sidebar: {
		showRoots: true,
		collapsedRoots: ['other'],
	},
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
	},
})
