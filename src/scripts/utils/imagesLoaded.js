import imagesLoaded from 'imagesloaded'

export const preloadImages = (selector = 'img', percentageElm) => {
	return new Promise((resolve, reject) => {
		const imgElements = document.querySelectorAll(selector)
		const imageCount = imgElements.length

		let loadedCount = 0

		const onAlways = () => {
			const percentage = Math.round((loadedCount / imageCount) * 100)
			resolve({ total: imageCount, loaded: loadedCount, percentage })
		}

		const onProgress = () => {
			loadedCount++
			const percentage = Math.round((loadedCount / imageCount) * 100)
			if (percentageElm) percentageElm.innerText = `${percentage}%`
			console.log('🚀 ~ file: imagesLoaded.js:20 ~ onProgress ~ `${percentage}%`:', `${percentage}%`)
		}

		const onError = () => {
			// This callback is triggered for each image that fails to load.
			loadedCount++
		}

		// Use imagesLoaded to handle image loading events.
		const imgLoad = imagesLoaded(imgElements, { background: true })

		imgLoad.on('progress', onProgress)
		imgLoad.on('always', onAlways)
		imgLoad.on('fail', onError)
	})
}
