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
		{ title: 'CN', room: 'B210', time: '9:30' },
		{ title: 'CN', room: 'B210', time: '9:30' },
	],
	1: [{ title: 'CN', room: 'B210', time: '11:00' }],
	2: [{ title: 'CN', room: 'B210', time: '12:30' }],
	3: [{ title: 'CN', room: 'B210', time: '14:00' }],
	4: [{ title: 'CN', room: 'B210', time: '15:30' }],
}
