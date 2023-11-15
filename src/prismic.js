import * as prismic from '@prismicio/client'

const API_ENDPOINT = 'https://astro-boilerplate.cdn.prismic.io/api/v2'

const client = prismic.createClient(API_ENDPOINT)

export async function getPage(slug) {
	return client.getByUID('page', slug, { pageSize: 1, page: 1 })
}
