import { gsap } from 'gsap'

import page from '../../helpers/page'

export default function about() {
	const pageObject = page({})

	const show = () => {
		return new Promise(resolve => {
			resolve()
		})
	}

	const hide = () => {
		return new Promise(resolve => {
			resolve()
		})
	}

	return {
		...pageObject,
		show,
		hide,
	}
}
