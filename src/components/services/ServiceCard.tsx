import React from 'react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg">
        <service.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};