import { gsap } from 'gsap'
import SplitType from 'split-type'

import component from '../helpers/component'

export default function textAnimation({ elm, elms, index }) {
	const { element } = component({ elm, elms })

	const type = element.getAttribute('data-type')

	const trigger = element.getAttribute('data-trigger') || element

	const startPosition = element.getAttribute('data-start-position') || 'top bottom'

	const splittedText = new SplitType(elm)

	const textToAnimate = type === 'title' ? splittedText.chars : splittedText.words

	gsap.set(textToAnimate, {
		y: '120%',
	})

	gsap.set(element, {
		opacity: 1,
	})

	if (type === 'title') {
		return gsap.to(splittedText.chars, {
			scrollTrigger: { trigger: `.${trigger}`, start: startPosition, markers: false },
			stagger: 0.01,
			ease: 'expo.out',
			duration: 0.5,
			y: '0',
			overwrite: true,
			delay: (0.4 + index) * 0.05,
		})
	}

	return gsap.to(splittedText.words, {
		scrollTrigger: { trigger: `.${trigger}`, start: startPosition, markers: false },
		stagger: 0.01,
		ease: 'expo.out',
		duration: 0.4,
		y: '0',
		overwrite: true,
		delay: (0.4 + index) * 0.04,
	})

	// type === 'title' ? titleTween.play() : paragraphTween.play()
}
