import { useState } from 'react'
import './App.css'
import { Button } from './components/UI/Button/Button'
import { links } from './static/Links'
import { timeTable } from './static/TimeTable'

function App() {
	const [tab, setTab] = useState<number>(new Date().getDay() - 1)

	return (
		<div className='w-screen h-screen overflow-x-hidden bg-[#34344A]'>
			<div className='max-w-[500px] pt-24 md:pt-32 lg:pt-40 mx-auto lg:px-0 px-6'>
				<div className='flex flex-wrap gap-8 md:gap-10 lg:gap-12'>
					{links.map(link => (
						<Button
							key={link.link}
							onClick={() => window.open(link.link, '_blank')}
						>
							<img className='size-10 md:size-12 lg:size-16' src={link.icon} />
						</Button>
					))}
				</div>
				<div className='flex mt-20'>
					{['M', 'T', 'W', 'T', 'F'].map((day, index) => (
						<div
							key={index}
							className={`size-14 border border-black flex justify-center items-center text-white text-2xl font-bold cursor-pointer ${
								tab === index && 'bg-red-400'
							}`}
							onClick={() => setTab(index)}
						>
							{day}
						</div>
					))}
				</div>
				<div>
					{timeTable[tab]?.map(lecture => (
						<div className='mt-4 flex gap-4 text-white'>
							<span className='font-bold text-xl'>{lecture.title}</span>
							<span className='font-semibold text-lg'>{lecture.room}</span>
							<span className='font-semibold text-lg'>{lecture.time}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
