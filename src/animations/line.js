import { gsap } from 'gsap'

import component from '../helpers/component'

export default function line({ elm, elms, index }) {
	const { element } = component({ elm, elms })

	const trigger = element.getAttribute('data-trigger') || element

	const startPosition = element.getAttribute('data-start-position') || 'top bottom'

	return gsap.to(element, {
		scrollTrigger: { trigger: `.${trigger}` || element, start: startPosition, markers: false },
		ease: 'expo.out',
		duration: 2,
		width: '100%',
		overwrite: true,
		delay: index * 0.2,
	})
}
