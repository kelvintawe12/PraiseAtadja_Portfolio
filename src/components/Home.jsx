import React from 'react'
import HomeImage from '../assets/aseye.jpg'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  return (
		<div className="bg-black text-white text-center py-16">
			<Header />
			<img
				src={HomeImage}
				alt=""
				className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
			/>
			<h1 className="text-4xl font-bold">
				I'm{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
					Praise Orly Atadja
				</span>
				, Data Scientist
			</h1>
			<p className="mt-4 px-20 text-lg text-gray-300">
				I specialize in developing innovative data-driven solutions and web
				applications, leveraging machine learning, data analytics, and modern
				web development techniques to solve real-world problems in healthcare,
				education, and energy.
			</p>

			<div className="mt-8 space-x-4">
				<a
					href="https://medium.com/@praiseorly.atadja"
					target="_blank"
					rel="noopener noreferrer">
					<button
						className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
						Publications
					</button>
				</a>

				<a
					href="https://drive.google.com/file/d/1tfnVwjXF7T-hFgqeAoIbjNyjbhZGLDP_/view?usp=sharing"
					download>
					<button
						className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
						Resume
					</button>
				</a>
			</div>
			<Footer/>
		</div>
	);
}

export default Home