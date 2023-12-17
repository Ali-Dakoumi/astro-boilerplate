import { gsap } from 'gsap'

import component from '../helpers/component'

export default function overlay({ elm, elms }) {
	const { element } = component({ elm, elms })

	const trigger = element.getAttribute('data-trigger') || element

	return gsap.to(element, {
		scrollTrigger: { trigger: `.${trigger}` || element, start: 'top center+=300px', markers: false },
		ease: 'expo.out',
		duration: 1,
		y: '-100%',
		transformOrigin: 'top top',
		delay: 1,
	})
}
