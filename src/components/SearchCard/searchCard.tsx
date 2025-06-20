import { ResearchTopic } from '@/types/searchData'

export default function SearchCard({ data }: { data: ResearchTopic }) {
	const keywordArray = data?.keywords.split(',').map((k: string) => k.trim())

	return (
		<div className="flex rounded-lg p-4 bg-white w-5/6 border-1 border-gray-200">
			<img
				src="/images/sample.svg"
				alt="샘플 이미지"
				className="w-[137px] h-[137px] rounded-md mr-[25px]"
			/>

			<div className="text-[15px]">
				<div>
					<h2 className="mb-[9px]">{data.title}</h2>
					<div className="mb-[5px]">{data.subject}</div>
					<div>{data.mainTopic}</div>
					<div className="mb-[11px]">{data.subTopic}</div>
				</div>

				<div className="flex flex-wrap gap-2 mb-[12px]">
					{keywordArray.map((word: string, index: number) => (
						<button
							key={index}
							className="px-3 py-1 rounded-sm text-xs border border-gray-200 font-[600]"
						>
							{word}
						</button>
					))}
				</div>
				<div className="mb-[5px]">{data.relatedMajor}</div>
				<div className="mb-[5px]">
					첨단바이오(구 줄기), 치의예과, 보건정책관리학부, 통계학, 첨단컴퓨팅
				</div>
				<button className="px-3 py-1 rounded-sm text-xs border-1 border-gray-200 mb-[12px] font-[6500]">
					{data.difficulty}
				</button>
				<div className="mb-[5px]">{data.difficultyReason}</div>
			</div>
		</div>
	)
}
