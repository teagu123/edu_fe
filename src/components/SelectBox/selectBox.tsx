import { useState } from 'react'

export default function SelectBox() {
	const [isOpen, setIsOpen] = useState(false)

	const onToggle = () => setIsOpen(!isOpen)

	return (
		<div className="w-[300px] mx-auto mt-4 relative text-[15px]">
			{/* 상단 버튼 */}
			<div
				className="flex justify-between items-center p-3 bg-white border-1 border-gray-300 rounded cursor-pointer"
				onClick={onToggle}
			>
				<span className="text-gray-800">과목</span>
				<span className="text-gray-500">{isOpen ? '▲' : '▼'}</span>
			</div>

			{/* 메뉴 리스트 */}
			{isOpen && (
				<div className="mt-1 bg-white border-1 border-gray-300 rounded absolute w-full z-100">
					<ul className="divide-y divide-gray-200">
						<li className="p-3 text-gray-700 hover:bg-gray-50">
							국어 (1학년 공통국어)
						</li>
						<li className="p-3 text-gray-700 hover:bg-gray-50">독서</li>
						<li className="p-3 text-gray-700 hover:bg-gray-50">문학</li>
						<li className="p-3 text-gray-700 hover:bg-gray-50">화법과 작문</li>
						<li className="p-3 text-gray-700 hover:bg-gray-50">언어와 매체</li>
					</ul>
				</div>
			)}
		</div>
	)
}
