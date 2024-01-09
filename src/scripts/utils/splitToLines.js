function splitToLines(element) {
	const lines = element.querySelectorAll('.line')

	lines.forEach(function (line) {
		const wordsContainer = document.createElement('div')
		wordsContainer.classList.add('words')

		const words = line.querySelectorAll('.word')

		words.forEach(function (word, index) {
			wordsContainer.appendChild(word)

			if (index < words.length - 1) {
				let space = document.createTextNode(' ')
				wordsContainer.appendChild(space)
			}
		})

		line.appendChild(wordsContainer)
	})
}

export default splitToLines
