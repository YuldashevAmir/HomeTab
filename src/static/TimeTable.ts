interface ITimeTable {
	[key: number]: TLecture[]
}

type TLecture = {
	title: string
	room: string
	time: string
}

export const timeTable: ITimeTable = {
	0: [
		{ title: 'SaS', room: 'B201', time: '11:00' },
		{ title: 'ItBA', room: 'A203', time: '12:30' },
	],
	1: [{ title: 'CN', room: 'A203', time: '15:30' }],
	2: [
		{ title: 'P&S', room: 'B209', time: '14:00' },
		{ title: 'UP', room: 'B209', time: '15:30' },
	],
	3: [
		{ title: 'SaS', room: 'B202', time: '9:30' },
		{ title: 'ItBA', room: 'A605', time: '11:00' },
	],
	4: [
		{ title: 'P&S', room: 'B210', time: '9:30' },
		{ title: 'CN', room: 'B209', time: '11:00' },
		{ title: 'UP', room: 'B202', time: '12:30' },
	],
}
