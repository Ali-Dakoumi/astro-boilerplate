import { each, map } from 'lodash'
import { gsap } from 'gsap'

export default function page({ id, elm, elms }) {
	let selector = elm
	let selectorChildren = {
		...elms,
	}

	let element
	let elements = {}

	const create = () => {
		element = document.querySelector(selector)

		each(selectorChildren, (entry, key) => {
			if (entry instanceof HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
				elements[key] = entry
			} else {
				elements[key] = document.querySelectorAll(entry)
				if (elements[key].length === 0) {
					elements[key] = null
				} else if (elements[key].length === 1) {
					elements[key] = document.querySelector(entry)
				}
			}
		})

		return { element, elements }
	}

	const createAnimations = () => {}

	const removeEventListeners = () => {}

	const update = () => {}

	return {
		create,
		update,
		createAnimations,
		removeEventListeners,
	}
}
