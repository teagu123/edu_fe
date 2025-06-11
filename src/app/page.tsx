'use client'

import SearchBox from '@/components/SearchBox/searchbox'
import SearchCard from '@/components/SearchCard/searchCard'

export default function Home() {
	return (
		<div>
			{/* 검색 파트 */}
			<SearchBox />

			{/* 검색 아래 파트 */}
			<div className="px-[156px] mt-[41px] flex flex-col gap-4 pb-10">
				<SearchCard />
				<SearchCard />
				<SearchCard />
			</div>
		</div>
	)
}
