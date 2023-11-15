// everything can be changed depending on your logic

import gsap from 'gsap'
import component from '../helpers/component'

import { each } from 'lodash'

export default function preloader() {
	const componentObject = component({
		elm: '.preloader',
		elms: {
			number: '.preloader__number',
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

		each(elements.images, image => {
			image.onload = () => {
				onAssetLoaded(image)
			}
		})
	}

	const onAssetLoaded = async image => {
		length += 1
		const percent = length / elements.images.length
		elements.number.innerHTML = `${Math.round(percent * 100)}%`
		if (percent === 1) {
			await onloaded()
		}
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
