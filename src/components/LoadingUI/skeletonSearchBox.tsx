export default function SkeletonSearchBox() {
	return (
		<div className="flex bg-white rounded-xl shadow-md p-6 w-full max-w-4xl animate-pulse">
			<div className="w-[137px] h-[137px] bg-gray-200 rounded-md mr-6 flex-shrink-0" />

			<div className="flex flex-col justify-between flex-1 space-y-2">
				<div className="h-5 bg-gray-300 rounded w-2/3" />

				<div className="h-4 bg-gray-200 rounded w-1/3" />
				<div className="h-4 bg-gray-200 rounded w-1/2" />

				<div className="flex flex-wrap gap-2 mt-2">
					{Array.from({ length: 5 }).map((_, idx) => (
						<div
							key={idx}
							className="w-[100px] h-[28px] bg-gray-200 rounded-sm"
						/>
					))}
				</div>

				<div className="h-4 bg-gray-200 rounded w-full mt-3" />
				<div className="h-4 bg-gray-200 rounded w-3/4" />

				<div className="h-4 bg-gray-200 rounded w-full mt-4" />
				<div className="h-4 bg-gray-200 rounded w-[90%]" />
				<div className="h-4 bg-gray-200 rounded w-[80%]" />
			</div>
		</div>
	)
}
