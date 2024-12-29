import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaLaptopCode, FaMobileAlt, FaSearch, FaBullhorn, FaBrain, FaChartLine, FaLanguage, FaDatabase } from 'react-icons/fa';

const services = [
    { id: 1, name: 'AI-Powered Web Development', description: 'Building responsive and high-quality websites using AI technologies.', icon: <FaLaptopCode /> },
    { id: 2, name: 'AI-Driven Mobile App Development', description: 'Creating user-friendly mobile applications with AI integration.', icon: <FaMobileAlt /> },
    { id: 3, name: 'AI-Based SEO Optimization', description: 'Improving website visibility on search engines using AI algorithms.', icon: <FaSearch /> },
    { id: 4, name: 'AI-Enhanced Digital Marketing', description: 'Promoting brands through digital channels with AI-driven strategies.', icon: <FaBullhorn /> },
    { id: 5, name: 'AI Consulting', description: 'Providing expert advice on AI implementation and strategy.', icon: <FaBrain /> },
    { id: 6, name: 'Machine Learning Solutions', description: 'Developing custom machine learning models to solve complex problems.', icon: <FaChartLine /> },
    { id: 7, name: 'Natural Language Processing', description: 'Implementing NLP solutions for better understanding and interaction.', icon: <FaLanguage /> },
    { id: 8, name: 'AI-Powered Data Analytics', description: 'Leveraging AI to gain insights from data and drive business decisions.', icon: <FaDatabase /> },
];

const Services: React.FC = () => {
    return (
        <div className="p-8 font-sans">
            <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Our AI Solutions</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map(service => (
                    <div key={service.id} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
                        <h2 className="text-2xl font-semibold text-blue-600">{service.name}</h2>
                        <p className="text-gray-600 mt-2 text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;