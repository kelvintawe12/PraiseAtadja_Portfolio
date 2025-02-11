import React from "react";
import machine from "../assets/machine.jpg";

const projects = [
	{
		id: 1,
		title: "COVID-19 Clinical Trials",
		description:
			"Analyzing clinical trial data to understand the effectiveness of COVID-19 treatments.",
		image: machine,
		github: "https://github.com/PraiseOrly/COVID-19_ClinicalTrials",
	},
	{
		id: 2,
		title: "Medical Conditions",
		description:
			"Exploring and analyzing data on various medical conditions to improve diagnosis and treatment plans.",
		image: machine,
		github: "https://github.com/PraiseOrly/Medical_Conditions",
	},
	{
		id: 3,
		title: "OCD Patient Dataset",
		description:
			"Analyzing data from OCD patients to develop predictive models for treatment response.",
		image: machine,
		github: "https://github.com/PraiseOrly/OCD_Patient_Dataset",
	},
	{
		id: 4,
		title: "Stroke Prediction Model",
		description:
			"Building a model to predict stroke risk based on medical and lifestyle data from patients.",
		image: machine,
		github: "https://github.com/PraiseOrly/Stroke_Prediction_Model",
	},
	{
		id: 5,
		title: "Personalized Healthcare Recommendations",
		description:
			"Creating personalized healthcare recommendations based on individual patient data.",
		image: machine,
		github:
			"https://github.com/PraiseOrly/Personalized_Healthcare_Recommendations",
	},

	{
		id: 6,
		title: "Diabetes Risk Assessment",
		description:
			"Creating a predictive model to assess diabetes risk based on personal and health information.",
		image: machine,
		github: "https://github.com/YouafKhan1",
	},
];

const Projects = () => {
	return (
		<div className="bg-black text-white py-20" id="project">
			<div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-12">
					Data Science & Machine Learning Projects
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
							<img
								src={project.image}
								alt={project.title}
								className="rounded-lg mb-4 
              w-full h-48 object-cover"
							/>
							<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-400 mb-4">{project.description}</p>
							<a
								href={project.github}
								className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
								target="_blank"
								rel="noopener noreferrer">
								GitHub
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
