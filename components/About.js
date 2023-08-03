import { about } from '@/data/config';

export default function About() {

	return (
		<div className="bg-gray-900 text-white py-16 flex flex-wrap items-center">
			<div className="w-full md:w-1/2 px-6 md:px-16 lg:px-24 xl:px-32 text-center md:text-left">
				<h2 className="text-4xl font-bold mb-4 bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">About Me</h2>
				<p className="text-lg text-gray-300 leading-loose">
					{about.description}
				</p>
			</div>
			<div className="w-full md:w-1/2 px-6 md:px-16 lg:px-24 xl:px-32">
				<img
					src={about.image}
					alt="Profile"
					className="w-full h-auto md:max-h-96 object-cover rounded"
				/>
			</div>
		</div>
	);
}