'use client'

import SearchBox from '@/components/SearchBox/searchbox'
import SearchCard from '@/components/SearchCard/searchCard'
import { useQuery } from '@tanstack/react-query'
import { SearchParams } from 'next/dist/server/request/search-params';
import { useState } from 'react';


const fetchSearchResults = async (params: SearchParams) => {
	const { keyword } = params;
  
	const res = await fetch(
	  `https://topicsearch-service-qk644thorq-du.a.run.app/search?keyword=${(keyword)}`
	);
  
	if (!res.ok) throw new Error('검색 실패');
  
	return res.json();
  };

export default function Home() {

	const [params, setParams] = useState<SearchParams>({ keyword: '' });

	const { data, isLoading, isError } = useQuery({
		queryKey: ['search', params],
		queryFn: () => fetchSearchResults(params),
		enabled: !!params.keyword,
	  });

	  console.log(data)

	return (
		<div>
			<SearchBox onSearch={(values) => setParams(values)}/>

			
			<div className="px-[156px] mt-[41px] flex flex-col gap-4 pb-10">
				<SearchCard />
				<SearchCard />
				<SearchCard />
			</div>
		</div>
	)
}
