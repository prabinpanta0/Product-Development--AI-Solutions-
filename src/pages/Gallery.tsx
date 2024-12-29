import React from 'react';
import { useStore } from '../store/store';
import { Play } from 'lucide-react';

export const Gallery = () => {
  const { gallery } = useStore();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 dark:text-white">Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="relative">
                  <video
                    src={item.url}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {item.description}
                  </p>
                )}
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <span className="capitalize">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};