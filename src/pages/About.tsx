import React from 'react';
import { Brain, Target, Users, Zap } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About AI Solutions</h1>
          <p className="text-xl">
            Innovating the future of digital employee experience through AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                AI-Solutions is a fictitious start-up company based in Sunderland. We leverage AI to assist
                various industries with software solutions to rapidly and proactively address issues that can impact
                the digital employee experience, thus speeding up design, engineering, and innovation.
              </p>
              <p className="text-gray-600 mb-4">
                AI-Solutions has distinguished itself by integrating an AI-powered virtual assistant that responds to users' inquiries
                and provides AI-based, affordable prototyping solutions. This unique selling point sets us apart
                from our competitors and is sure to pique customers' interest.
              </p>
              <p className="text-gray-600">
                Our mission is to innovate, promote, and deliver the future of the digital employee experience, with a strong focus on supporting
                people at work. This commitment is at the core of our global expansion and aims to make a worldwide
                impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Brain, title: 'Innovation', desc: 'Cutting-edge AI solutions' },
                { icon: Target, title: 'Precision', desc: 'Accurate and reliable results' },
                { icon: Users, title: 'Support', desc: '24/7 customer assistance' },
                { icon: Zap, title: 'Speed', desc: 'Rapid implementation' }
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white p-6 rounded-lg shadow-md">
                  <Icon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-bold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Our Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { name: 'John Doe', role: 'CEO', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Jane Smith', role: 'CTO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Alice Johnson', role: 'CFO', img: 'https://images.unsplash.com/photo-1606573544515-fc5acaafd1fb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ].map(({ name, role, img }) => (
          <div key={name} className="bg-white p-6 shadow-md text-center">
            <img src={img} alt={name} className="h-40 w-40 rounded-full centered mx-auto mb-4" />
            <h3 className="font-bold mb-2">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* A Word from the CEO Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">A Word from Our CEO</h2>
          <p className="text-xl text-gray-600 mb-4">
        "At AI Solutions, we are committed to driving innovation and excellence in the digital employee experience. Our team is dedicated to providing cutting-edge AI solutions that empower businesses to thrive in the modern world."
          </p>
          <p className="text-xl text-gray-600">- John Doe, CEO</p>
        </div>
      </section>

      {/* Our Goals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Innovation', desc: 'Continuously develop cutting-edge AI technologies.' },
          { title: 'Customer Satisfaction', desc: 'Provide exceptional service and support to our clients.' },
          { title: 'Global Expansion', desc: 'Expand our reach and impact worldwide.' }
        ].map(({ title, desc }) => (
          <div key={title} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
          </div>
        </div>
      </section>

      {/* Our Plans Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Research & Development', desc: 'Invest in R&D to stay ahead in AI technology.' },
          { title: 'Customer Engagement', desc: 'Enhance customer engagement through personalized AI solutions.' },
          { title: 'Strategic Partnerships', desc: 'Form strategic partnerships to expand our capabilities and reach.' }
        ].map(({ title, desc }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="font-bold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
          </div>
        </div>
      </section>
    </div>
  );
};