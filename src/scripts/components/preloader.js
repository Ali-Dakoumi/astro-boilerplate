// everything can be changed depending on your logic

import gsap from 'gsap'
import component from '../helpers/component'
import { preloadImages } from '../utils/imagesLoaded'

export default function preloader() {
	const componentObject = component({
		elm: '.preloader',
		elms: {
			preloaderPercentage: '.preloader__number',
			images: document.querySelectorAll('img'),
		},
	})

	let length = 0
	console.log('🚀 ~ file: preloader.js:11 ~ preloader ~ componentObject:', componentObject)

	const { element, elements } = componentObject
	console.log('🚀 ~ file: preloader.js:14 ~ preloader ~ element:', element)

	const createPreloader = () => {
		// your logic here before running animation
		if (!elements.images.length) {
			elements.number.innerHTML = `100%`
			onloaded()
			return
		}

		preloadImages('img', elements.preloaderPercentage)
			.then(async () => {
				await onloaded()
			})
			.catch(error => {
				console.error('Image loading failed:', error)
			})
	}

	const onloaded = () =>
		new Promise(resolve => {
			// your animation here
			gsap.to(element, {
				y: '-100%',
				onComplete: () => {
					document.dispatchEvent(new Event('removePreloader'))
					resolve()
				},
			})
		})

	const destroy = () => {
		element.parentNode.removeChild(element)
	}

	// auto run methods
	createPreloader()

	return {
		element,
		elements,
		destroy,
	}
}
