// everything can be changed depending on your logic

import component from '../helpers/component'

export default function preloader() {
	const componentObject = component({
		elm: '.preloader',
		elms: {},
	})

	const { element, elements, eventEmitter } = componentObject

	const createPreloader = () => {
		// your logic here before running animation
	}

	const onloaded = () =>
		new Promise(resolve => {
			// your animation here
			eventEmitter.emit('completed')
			resolve()
		})

	const destroy = () => {
		element.parentNode.removeChild(element)
	}

	// auto run methods
	createPreloader()

	return {
		element,
		elements,
		eventEmitter,
		destroy,
	}
}
