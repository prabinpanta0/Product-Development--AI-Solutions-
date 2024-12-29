import React, { useState } from 'react';
import { useStore } from '../../store/store';
import { RiImageAddLine, RiDeleteBin6Line } from 'react-icons/ri';
import toast from 'react-hot-toast';

export const AdminGallery = () => {
  const { gallery, addGalleryItem, deleteGalleryItem } = useStore();
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    const newItem = {
      id: Date.now().toString(),
      type: formData.get('type') as 'image' | 'video',
      url: formData.get('url') as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      date: new Date().toISOString(),
      category: formData.get('category') as 'event' | 'company',
      views: 0,
    };

    try {
      addGalleryItem(newItem);
      toast.success('Media uploaded successfully!');
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error('Failed to upload media');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteGalleryItem(id);
      toast.success('Media deleted successfully!');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold dark:text-white">Gallery Management</h2>
      </div>

      {/* Upload Form */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4 dark:text-white">Upload New Media</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Type
              </label>
              <select
                name="type"
                required
                aria-label="Type"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                name="category"
                title='Category'
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="event">Event</option>
                <option value="company">Company</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Title
            </label>
            <input
              type="text"
              title='Title'
              name="title"
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              URL
            </label>
            <input
              type="url"
              name="url"
              required
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <textarea
            title='Description'
              name="description"
              rows={3}
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            disabled={isUploading}
            className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg transition-colors"
          >
            <RiImageAddLine className="mr-2" />
            {isUploading ? 'Uploading...' : 'Upload Media'}
          </button>
        </form>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <video
                src={item.url}
                className="w-full h-48 object-cover"
                controls
              />
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold dark:text-white">{item.title}</h3>
                <button
                title='Delete'
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <RiDeleteBin6Line className="h-5 w-5" />
                </button>
              </div>
              {item.description && (
                <p className="text-gray-600 dark:text-gray-400 mb-2">{item.description}</p>
              )}
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                <span className="capitalize">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};