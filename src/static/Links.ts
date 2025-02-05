import github from '../assets/icons/github.svg'
import gmail from '../assets/icons/gmail.svg'
import gpt from '../assets/icons/gpt.svg'
import inha from '../assets/icons/inha.svg'
import youtube from '../assets/icons/youtube.svg'

export interface ILink {
	link: string
	icon: string
}

export const links: ILink[] = [
	{ link: 'https://www.youtube.com/', icon: youtube },
	{ link: 'https://chatgpt.com/', icon: gpt },
	{ link: 'https://github.com/', icon: github },
	{ link: 'https://eclass.inha.ac.kr/', icon: inha },
	{ link: 'https://mail.google.com/', icon: gmail },
]
