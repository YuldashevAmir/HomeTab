interface ITimeTable {
	[key: number]: TLecture[]
}

type TLecture = {
	title: string
	room: string
	time: string
}

export const timeTable: ITimeTable = {
	0: [],
	1: [
		{ title: 'SaS', room: 'B202', time: '9:30' },
		{ title: 'ItBA', room: 'A203', time: '11:00' },
		{ title: 'DA&D', room: 'A203', time: '12:30' },
		{ title: 'CN', room: 'A203', time: '15:30' },
	],
	2: [
		{ title: 'SaS', room: 'B202', time: '11:00' },
		{ title: 'P&S', room: 'B209', time: '14:00' },
		{ title: 'UP', room: 'B209', time: '15:30' },
		{ title: 'UAH', room: 'B304', time: '17:00' },
	],
	3: [
		{ title: 'ItBA', room: 'A605', time: '11:00' },
		{ title: 'DA&D', room: 'B201', time: '14:00' },
		{ title: 'UP', room: 'B201', time: '15:30' },
	],
	4: [
		{ title: 'P&S', room: 'B210', time: '9:30' },
		{ title: 'CN', room: 'B209', time: '11:00' },
	],
	5: [],
	6: [],
}
