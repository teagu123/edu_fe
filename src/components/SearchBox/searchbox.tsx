import SelectBox from '../SelectBox/selectBox'

export default function SearchBox() {
	return (
		<div className="bg-[#F9F2F5] px-[156px] flex flex-col items-center text-[20px] pt-[75px] pb-[28px]">
			<div className="pb-[4px]">합격 탐구보고서 계획표</div>
			<div className="text-[32px] font-[700]">탐구 보고서 계획표 Best 10</div>

			<div className="flex justify-between w-full mt-[24px]">
				<div>
					<div className="text-[24px] font-[400]">
						나의 키워드를 보여줄 탐구주제는?
					</div>
					<div className="grid grid-cols-2 gap-4 gap-y-0">
						<SelectBox />
						<SelectBox />
						<SelectBox />
					</div>

					<div className="flex items-center w-full mt-4">
						<input
							type="text"
							placeholder="주제 키워드"
							className="p-4 border border-gray-300 rounded bg-white focus:outline-none text-[16px] w-full h-[50px]"
						/>
						<button className="ml-4 text-[16px] p-3 w-20 bg-[#E45D7D] text-white rounded cursor-pointer">
							검색
						</button>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	)
}
