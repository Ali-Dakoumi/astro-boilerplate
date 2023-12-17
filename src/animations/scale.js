import { gsap } from 'gsap'

import component from '../helpers/component'

export default function opacity({ elm, elms }) {
	const { element } = component({ elm, elms })

	const trigger = element.getAttribute('data-trigger') || element

	return gsap.to(element, {
		scrollTrigger: `.${trigger}`,
		scale: 1.2,
	})
}
