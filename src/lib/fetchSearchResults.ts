export type SearchQueryParams = {
	keyword: string
	curriculum?: string
	subject?: string
	major?: string
}

export const fetchSearchResults = async (params: SearchQueryParams) => {
	const { keyword, curriculum, subject, major } = params
	const apiUrl = process.env.NEXT_PUBLIC_API_URL

	const query = new URLSearchParams()
	query.append('keyword', keyword)

	if (curriculum) query.append('curriculum', curriculum)
	if (subject && major) query.append('subject', subject)
	if (major) query.append('major', major)

	const url = `${apiUrl}search?${query.toString()}`

	const res = await fetch(url)

	if (!res.ok) throw new Error('검색 실패')

	return res.json()
}
