export default function SearchCard() {
	return (
		<div className="flex rounded-lg p-4 bg-white w-5/6 border-1 border-gray-200">
			<img
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_8Rj-vULPVGhf-eQyiY5sG2dMcHFQzD6RrQ&s"
				alt="분석 이미지"
				className="w-[137px] h-[137px] rounded-md mr-[25px]"
			/>

			<div className="text-[15px]">
				<div>
					<h2 className="mb-[9px]">자폐증 조기 진단 전사체 분석 연구</h2>
					<div className="mb-[5px]">
						생물2 유전자의 발현과 조절, 발생 과정에서의 유전자 발현 조절
					</div>
					<div>유전자의 발현과 조절</div>
					<div className="mb-[11px]">발생 과정에서의 유전자 발현 조절</div>
				</div>

				<div className="flex flex-wrap gap-2 mb-[12px]">
					<button className="px-3 py-1 rounded-sm text-xs border-1 border-gray-200 font-[600]">
						전사체 분석
					</button>
				</div>
				<div className="mb-[5px]">
					첨단바이오(구 줄기), 치의예과, 보건정책관리학부, 통계학, 첨단컴퓨팅
				</div>
				<div className="mb-[5px]">
					첨단바이오(구 줄기), 치의예과, 보건정책관리학부, 통계학, 첨단컴퓨팅
				</div>
				<button className="px-3 py-1 rounded-sm text-xs border-1 border-gray-200 mb-[12px] font-[6500]">
					A
				</button>
				<div className="mb-[5px]">
					첨단바이오(구 줄기), 치의예과, 보건정책관리학부, 통계학, 첨단컴퓨팅
				</div>
			</div>
		</div>
	)
}
