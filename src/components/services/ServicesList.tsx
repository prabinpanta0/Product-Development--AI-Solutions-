import React from 'react';
import {
  RiRobot2Line,
  RiDashboardLine,
  RiCodeLine,
  RiBarChartLine,
  RiShieldLine,
  RiCustomerService2Line,
} from 'react-icons/ri';
import { ServiceCard } from './ServiceCard';
import { Service } from '../../types';

const services: Service[] = [
  {
    id: '1',
    title: 'AI-Powered Automation',
    description: 'Streamline your business processes with intelligent automation solutions.',
    features: [
      'Process Automation',
      'Workflow Optimization',
      'Smart Decision Making',
      'Real-time Analytics'
    ],
    icon: RiRobot2Line
  },
  {
    id: '2',
    title: 'Digital Employee Experience',
    description: 'Enhance workplace productivity with AI-driven tools.',
    features: [
      'Personalized Workflows',
      'Employee Engagement',
      'Performance Analytics',
      'Training & Development'
    ],
    icon: RiDashboardLine
  },
  {
    id: '3',
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions designed for your specific business needs.',
    features: [
      'Custom AI Models',
      'Integration Services',
      'Scalable Architecture',
      'Continuous Support'
    ],
    icon: RiCodeLine
  },
  {
    id: '4',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights.',
    features: [
      'Predictive Analytics',
      'Business Intelligence',
      'Data Visualization',
      'Performance Metrics'
    ],
    icon: RiBarChartLine
  },
  {
    id: '5',
    title: 'AI Security',
    description: 'Protect your AI systems with advanced security measures.',
    features: [
      'Threat Detection',
      'Data Protection',
      'Compliance Management',
      'Security Audits'
    ],
    icon: RiShieldLine
  },
  {
    id: '6',
    title: 'AI Support Services',
    description: 'Comprehensive support for your AI implementations.',
    features: [
      '24/7 Support',
      'Training Programs',
      'System Maintenance',
      'Regular Updates'
    ],
    icon: RiCustomerService2Line
  }
];

export const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};