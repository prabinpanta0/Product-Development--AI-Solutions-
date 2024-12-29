import React from 'react';
import { RiCalendarLine, RiMapPinLine } from 'react-icons/ri';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {event.imageUrl && (
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className={`text-sm font-semibold mb-2 ${
          event.type === 'happening' ? 'text-green-600 dark:text-green-400' :
          event.type === 'completed' ? 'text-gray-600 dark:text-gray-400' : 'text-blue-600 dark:text-blue-400'
        }`}>
          {event.type.toUpperCase()}
        </div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{event.title}</h3>
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <div className="flex items-center mr-4">
            <RiCalendarLine className="h-4 w-4 mr-1" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <RiMapPinLine className="h-4 w-4 mr-1" />
            {event.location}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
      </div>
    </div>
  );
};