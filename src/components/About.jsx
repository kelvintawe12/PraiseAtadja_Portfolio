import React from "react";
import AboutImage from "../assets/praise.jpg";

const About = () => {
  return (
		<div className="bg-black text-white py-20" id="about">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
				<div className="flex flex-col md:flex-row items-center md:space-x-12">
					<img
						src={AboutImage}
						alt=""
						className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
					/>
					<div className="flex-1">
						<p className="text-lg mb-8">
							I am a passionate and detail-oriented Data Scientist, Machine
							Learning Engineer, and dedicated researcher. My work centers on
							developing innovative, data-driven solutions to address real-world
							challenges in healthcare, education, and renewable energy. With a
							strong foundation in software engineering, I am deeply committed
							to advancing research that fuels impactful technologies for a
							better, more sustainable future.
						</p>

						<div className="mt-12 flex justify-between text-center">
							<div>
								<h3
									className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
									2+
								</h3>
								<p>Years Experience</p>
							</div>
							<div>
								<h3
									className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
									5+
								</h3>
								<p>Projects Completed</p>
							</div>
							<div>
								<h3
									className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
									5+
								</h3>
								<p>Certifications</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
