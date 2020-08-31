let game = {
	information: {
		name: 'Thrilling Mystery',
		description:
			'Uncover your identity and the evil that lurks along the old road.',
		genres: ['Mystery', 'Horror'],
		version: '1.0.0',
		year: '2020',
		author: 'dyingSatyr',
	},
	player: {
		name: 'Jake',
		position: {
			x: 0,
			y: 0,
			z: 0,
		},
		inventory: ['pen', 'paper', 'sword'],
	},
	rooms: [
		{
			name: 'Old Road',
			description: `It's dark outside and the old road looks empty. You see a speck of light in the distance up north. 
            Skid marks lead to the nearby forest on the west.`,
			visited: false,
			locked: false,
			exits: {},
			items: {
				i01: {
					name: 'Speck of light',
					description:
						"There's a speck of light in the distance up north. It's too far to say what it is.",
					alias: ['speck', 'light', 'speck of light'],
					isScenery: true,
					visible: true,
				},
			},
			position: {
				x: 0,
				y: 0,
				z: 0,
			},
		},
	],
}

export default game
