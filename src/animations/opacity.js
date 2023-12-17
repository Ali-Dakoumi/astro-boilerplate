import { gsap } from 'gsap'

import component from '../helpers/component'

export default function opacity({ elm, elms, index }) {
	const { element } = component({ elm, elms })

	const trigger = element.getAttribute('data-trigger') || element

	return gsap.to(element, 1, {
		scrollTrigger: `.${trigger}`,
		opacity: 1,
		overwrite: true,
		delay: (1 + index) * 0.07,
	})
}
