export default function component({ elm, elms }) {
	let selector = elm
	let selectorChildren = {
		...elms,
	}

	let element
	let elements = {}

	const create = () => {
		if (selector instanceof window.HTMLElement) {
			element = selector
		} else {
			element = document.querySelector(selector)
		}

		Object.entries(selectorChildren).forEach(([key, entry]) => {
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
	}

	const addEventListeners = () => {}

	const removeEventListeners = () => {}

	create()

	return {
		element,
		elements,
	}
}
