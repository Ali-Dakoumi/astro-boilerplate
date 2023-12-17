import home from './pages/home'
import about from './pages/about'
import contact from './pages/contact'
import preloader from './components/preloader'

const app = () => {
	let content, template, initPage, scroll, page, pages, initPreloader, pageElement, pageElements

	const links = document.querySelectorAll('a')

	const createContent = () => {
		content = document.querySelector('.content')
		template = content.getAttribute('data-template')
	}

	const createPage = () => {
		pages = {
			home: home,
			about: about,
			contact: contact,
		}

		page = pages[template]
		initPage = page()
		const { element, elements } = initPage.create()
		pageElement = element
		pageElements = elements
	}

	const onChange = async link => {
		await initPage.hide({ pageElement, pageElements })

		const newPage = await window.fetch(link)

		if (newPage.status === 200) {
			const html = await newPage.text()
			const div = document.createElement('div')
			div.innerHTML = html
			const divContent = div.querySelector('.content')
			template = divContent.getAttribute('data-template')
			// navigation.onChange(template)
			content.setAttribute('data-template', template)
			content.innerHTML = divContent.innerHTML
			page = pages[template]
			initPage = page()
			const { element, elements } = initPage.create()
			pageElement = element
			pageElements = elements

			await initPage.show({ pageElement, pageElements })
			initPage.createAnimations()
			addLinkListeners()
			window.history.pushState(null, null, link)
		} else {
			console.log('error')
			throw new Error('couldnt fetch page ', link)
		}
	}

	const addLinkListeners = async () => {
		links.forEach(link => {
			link.onclick = e => {
				e.preventDefault()
				const { href } = link
				onChange(href)
			}
		})
	}

	const createPrealoder = () => {
		initPreloader = preloader()

		// Attach the 'preloaded' event listener
		document.addEventListener('removePreloader', () => {
			onPreloaded()
		})
	}

	const onPreloaded = () => {
		initPreloader.destroy()
		initPage.createAnimations()
	}

	createPrealoder()
	createContent()
	createPage()
	addLinkListeners()
}

export default app
