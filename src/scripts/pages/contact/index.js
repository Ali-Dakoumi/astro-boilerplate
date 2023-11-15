import { gsap } from 'gsap'

import page from '../../helpers/page'

export default function contact() {
	const pageObject = page({
		id: 'contact',
		elm: '.contact',
	})

	const show = ({ pageElement }) => {
		return new Promise(resolve => {
			gsap.from(pageElement, { autoAlpha: 0, onComplete: () => resolve() })
		})
	}

	const hide = ({ pageElement }) => {
		return new Promise(resolve => {
			gsap.to(pageElement, { autoAlpha: 0, onComplete: () => resolve() })
		})
	}

	return {
		...pageObject,
		show,
		hide,
	}
}
