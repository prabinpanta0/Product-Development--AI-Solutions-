import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import { Calendar, MapPin, PlusCircle, Trash2 } from 'lucide-react';

export const Posts = () => {
  const { articles, events, deleteArticle, deleteEvent } = useStore();
  const navigate = useNavigate();
  const [notification, setNotification] = useState<string | null>(null);

  const handleDeleteArticle = (id: string) => {
    deleteArticle(id);
    setNotification('Article deleted successfully.');
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDeleteEvent = (id: string) => {
    deleteEvent(id);
    setNotification('Event deleted successfully.');
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div>
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Posts</h2>
        <button
          onClick={() => navigate('/admin/write')}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="h-5 w-5" />
          <span>Write New Post</span>
        </button>
      </div>

      <div className="space-y-8">
        {/* Articles */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold dark:text-white">
                    {article.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span><Calendar className="h-4 w-4 mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                    </span> 
                  </div>
                  <button
                  title='Delete'
                    onClick={() => handleDeleteArticle(article.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {article.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold dark:text-white">
                    {event.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <button
                  title='Delete'
                    onClick={() => handleDeleteEvent(event.id)}
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {event.location}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
                <div className="mt-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm ${
                      event.type === 'upcoming'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : event.type === 'completed'
                        ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}
                  >
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
