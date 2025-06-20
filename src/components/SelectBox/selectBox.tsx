import { useState } from 'react'

export default function SelectBox({
	type,
	selectVal,
	setSelect,
	list,
	isDisabled = false,
}: {
	type: string
	selectVal: string | undefined
	setSelect: React.Dispatch<React.SetStateAction<string | undefined>>
	list: string[]
	isDisabled?: boolean
}) {
	const [isOpen, setIsOpen] = useState(false)

	const onToggle = () => setIsOpen(!isOpen)

	const onSelect = (el: string) => {
		// 같은 항목을 누르면 선택 해제
		if (el === selectVal) {
			setSelect(undefined)
		} else {
			setSelect(el)
		}
		setIsOpen(false)
	}

	return (
		<div className="w-[300px] mx-auto mt-4 relative text-[15px]">
			{/* 버튼 */}
			{isDisabled ? (
				<div
					className="flex justify-between items-center p-3 bg-gray-100 border border-gray-300 rounded cursor-pointer"
					style={{ pointerEvents: 'none' }}
				>
					<span className="text-gray-800">{type}</span>
					<span className="text-gray-500">{'▼'}</span>
				</div>
			) : (
				<div
					className="flex justify-between items-center p-3 bg-white border border-gray-300 rounded cursor-pointer"
					onClick={onToggle}
				>
					<span className="text-gray-800">{selectVal || type}</span>
					<span className="text-gray-500">{isOpen ? '▲' : '▼'}</span>
				</div>
			)}

			{/* 드롭다운 */}
			{isOpen && (
				<div className="mt-1 bg-white border border-gray-300 rounded absolute w-full z-50">
					<ul className="divide-y divide-gray-200 max-h-[200px] overflow-y-auto">
						{list.map((el: string, idx: number) => {
							const isSelected = el === selectVal
							return (
								<li
									key={idx}
									className={`p-3 cursor-pointer ${
										isSelected
											? 'bg-[#E45D7D] text-white font-semibold'
											: 'text-gray-700'
									}`}
									onClick={() => onSelect(el)}
								>
									{el}
								</li>
							)
						})}
					</ul>
				</div>
			)}
		</div>
	)
}
