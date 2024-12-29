import React from 'react';
import { useStore } from '../../store/store';
import {
  RiBarChartLine,
  RiUserLine,
  RiFileTextLine,
  RiCalendarLine,
} from 'react-icons/ri';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export const Dashboard = () => {
  const { analytics, articles, events, ratings } = useStore();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold dark:text-white">Dashboard</h2>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Views',
            value: analytics.totalViews,
            icon: RiUserLine,
            color: 'text-blue-600',
          },
          {
            title: 'Articles',
            value: articles.length,
            icon: RiFileTextLine,
            color: 'text-green-600',
          },
          {
            title: 'Events',
            value: events.length,
            icon: RiCalendarLine,
            color: 'text-purple-600',
          },
          {
            title: 'Avg. Daily Views',
            value: Math.round(
              analytics.recentViews.reduce((acc, curr) => acc + curr.views, 0) / 7
            ),
            icon: RiBarChartLine,
            color: 'text-orange-600',
          },
        ].map((stat) => (
          <div
            key={stat.title}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold dark:text-white">
                  {stat.value}
                </p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
      </div>

      {/* Views Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">
          Views Over Time
        </h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analytics.recentViews}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#2563eb"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Popular Content */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">
          Popular Content
        </h3>
        <div className="space-y-4">
          {analytics.popularContent.map((content) => (
            <div
              key={content.id}
              className="flex items-center justify-between border-b dark:border-gray-700 pb-4"
            >
              <div>
                <p className="font-medium dark:text-white">{content.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {content.type.charAt(0).toUpperCase() + content.type.slice(1)}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <RiUserLine className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  {content.views}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};