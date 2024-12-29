import React from 'react';
import { RiCalendarLine, RiUser3Line } from 'react-icons/ri';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{article.title}</h3>
        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
          <div className="flex items-center mr-4">
            <RiCalendarLine className="h-4 w-4 mr-1" />
            {new Date(article.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <RiUser3Line className="h-4 w-4 mr-1" />
            {article.author}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{article.content}</p>
      </div>
    </div>
  );
};