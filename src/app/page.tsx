'use client'

import SkeletonSearchBox from '@/components/LoadingUI/skeletonSearchBox'
import SearchBox from '@/components/SearchBox/searchbox'
import SearchCard from '@/components/SearchCard/searchCard'
import { ResearchTopic } from '@/types/searchData'
import { useQuery } from '@tanstack/react-query'
import { SearchParams } from 'next/dist/server/request/search-params'
import { useEffect, useState } from 'react'

const fetchSearchResults = async (params: SearchParams) => {
	const { keyword } = params
	const apiUrl = process.env.NEXT_PUBLIC_API_URL

	const res = await fetch(`${apiUrl}search?keyword=${keyword}`)

	if (!res.ok) throw new Error('검색 실패')

	return res.json()
}

export default function Home() {
	const [params, setParams] = useState<SearchParams>({ keyword: '' })
	const [searchList, setSearchList] = useState<[] | ResearchTopic[]>([])

	const { data, isLoading, isError } = useQuery({
		queryKey: ['search', params],
		queryFn: () => fetchSearchResults(params),
		enabled: !!params.keyword,
	})

	useEffect(() => {
		if (data) {
			setSearchList(data)
		}
	}, [data])

	return (
		<div>
			<SearchBox onSearch={values => setParams(values)} />

			{isLoading ? (
				<div className="px-[156px] mt-[41px] flex flex-col gap-4 pb-10">
					<SkeletonSearchBox />
				</div>
			) : (
				<div className="px-[156px] mt-[41px] flex flex-col gap-4 pb-10">
					{searchList.length === 0 ? (
						<div className="text-xl">검색 결과가 없습니다.</div>
					) : (
						<>
							{searchList?.map((el: any) => (
								<SearchCard data={el} key={el.title} />
							))}
						</>
					)}
				</div>
			)}
		</div>
	)
}
