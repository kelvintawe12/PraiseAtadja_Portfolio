import React from "react";

const analyticsProjects = [
	{
		id: 1,
		title: "Predictive Analytics for Healthcare",
		description:
			"Developed a machine learning model to predict patient outcomes based on historical medical data, improving early diagnosis and treatment decisions.",
		githubLink: "https://github.com/PraiseOrly/Healthcare_Predictive_Analysis",
	},
	{
		id: 2,
		title: "Data Analysis for Education Systems",
		description:
			"Analyzed student performance data to identify trends and areas of improvement, providing insights for curriculum adjustments and teaching strategies.",
		githubLink: "https://github.com/PraiseOrly/Education_Systems_Analysis",
	},
	{
		id: 3,
		title: "Energy Consumption Optimization",
		description:
			"Built a model to optimize energy usage in buildings, utilizing data from IoT devices to reduce energy waste and improve sustainability.",
		githubLink: "https://github.com/PraiseOrly/Energy_Consumption_Optimization",
	},
	{
		id: 4,
		title: "Sentiment Analysis for Social Media",
		description:
			"Applied NLP techniques to analyze social media posts, identifying trends in public sentiment on various topics and products.",
		githubLink: "https://github.com/PraiseOrly/Sentiment_Analysis_SM",
	},
	{
		id: 5,
		title: "Financial Forecasting Model",
		description:
			"Created a forecasting model for stock market predictions using time-series data to assist investors in making informed decisions.",
		githubLink: "https://github.com/PraiseOrly/Sales_forecasting_Model",
	},
	{
		id: 6,
		title: "Customer Segmentation Analysis",
		description:
			"Implemented clustering algorithms to segment customers based on purchasing behavior, enabling targeted marketing strategies for businesses.",
		githubLink: "https://github.com/PraiseOrly/Customer_Segmentation_Analysis",
	},
];

const Service = () => {
	return (
		<div className="bg-black text-white py-20" id="service">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-12">
					Data Analytics Projects
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{analyticsProjects.map((project) => (
						<div
							key={project.id}
							className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
							transition-transform duration-300 hover:scale-105">
							<div
								className="text-right text-2xl font-bold text-transparent bg-clip-text 
								bg-gradient-to-r from-green-600 to-blue-400">
								{project.id}
							</div>
							<h3
								className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
								bg-gradient-to-r from-green-400 to-blue-500">
								{project.title}
							</h3>
							<p className="mt-2 text-gray-300">{project.description}</p>
							<a
								href={project.githubLink}
								className="mt-4 inline-block text-green-400 hover:text-blue-500"
								target="_blank"
								rel="noopener noreferrer">
								Read More
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Service;
