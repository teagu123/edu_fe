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

	return (
		<div className="w-[300px] mx-auto mt-4 relative text-[15px]">
			{isDisabled ? (
				<div
					className="flex justify-between items-center p-3 bg-gray-100 border-1 border-gray-300 rounded cursor-pointer"
					style={{ pointerEvents: 'none' }}
				>
					<span className="text-gray-800">{type}</span>
					<span className="text-gray-500">{'▼'}</span>
				</div>
			) : (
				<div
					className="flex justify-between items-center p-3 bg-white border-1 border-gray-300 rounded cursor-pointer"
					onClick={onToggle}
				>
					<span className="text-gray-800">{selectVal ? selectVal : type}</span>
					<span className="text-gray-500">{isOpen ? '▲' : '▼'}</span>
				</div>
			)}

			{isOpen && (
				<div className="mt-1 bg-white border-1 border-gray-300 rounded absolute w-full z-100">
					<ul className="divide-y divide-gray-200">
						{list.map((el: string, idx: number) => (
							<li
								key={idx}
								className="p-3 text-gray-700 hover:bg-gray-50 cursor-pointer"
								onClick={() => {
									setSelect(el), onToggle()
								}}
							>
								{el}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}
