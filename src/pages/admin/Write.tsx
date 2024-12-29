import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/store';
import toast from 'react-hot-toast';
import { Star } from 'lucide-react';

export const Write = () => {
  const navigate = useNavigate();
  const [postType, setPostType] = useState<'article' | 'event' | 'ratings'>('article');
  const { addArticle, addEvent, addRating } = useStore();


    const [selectedRating, setSelectedRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
  
    const handleRating = (rating: number) => {
      setSelectedRating(rating);
      const ratingInput = document.querySelector('input[name="rating"]') as HTMLInputElement;
      if (ratingInput) {
        ratingInput.value = rating.toString();
      }
    };
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    if (postType === 'article') {
      const article = {
        id: Date.now().toString(),
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        image: formData.get('image') as string,
        date: new Date().toISOString(),
        author: formData.get('author') as string,
        views: 0
      };
      addArticle(article);
    } else if (postType === 'ratings') {
      const rating = {
        id: Date.now().toString(),
        rating: Number(formData.get('rating') as string),
        comment: formData.get('comment') as string,
        userName: formData.get('userName') as string,
        date: new Date().toISOString()
      };
      addRating(rating);
    }else {
      const event = {
        id: Date.now().toString(),
        title: formData.get('title') as string,
        description: formData.get('content') as string,
        imageUrl: formData.get('image') as string,
        date: formData.get('date') as string,
        location: formData.get('location') as string,
        type: 'upcoming' as const,
        views: 0
      };
      addEvent(event);
    }

    try {
      toast.success(`${postType === 'article' ? 'Article' : postType === 'ratings' ? 'Rating' : 'Event'} published successfully!`);
      // navigate('/admin/posts');
      // if post type is article or event, navigate to admin/posts
    } catch {
        toast.error('Failed to upload post');
    } finally {
      if (postType === 'article' || postType === 'event') {
        navigate('/admin/posts');
      } else {
        navigate('/admin/inquiries');
      }
    }
    };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Write New Post</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Post Type</label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setPostType('article')}
              className={`px-4 py-2 rounded-lg ${
                postType === 'article'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Article
            </button>
            <button
              type="button"
              onClick={() => setPostType('event')}
              className={`px-4 py-2 rounded-lg ${
                postType === 'event'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Event
            </button>
            <button
              type="button"
              onClick={() => setPostType('ratings')}
              className={`px-4 py-2 rounded-lg ${
                postType === 'ratings'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            > 
              Ratings
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
        {/*if post type is either article or event*/}	
        {(postType === 'article' || postType === 'event') && (
          <>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
            title='Title'
              type="text"
              name="title"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            </div>


            {postType === 'event' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <input
                title='Date'
                  type="date"
                  name="date"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                title='Location'
                  type="text"
                  name="location"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
            )}

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image Link
            </label>
            <input
            title='Image Link'
              type="text"
              name="image"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            </div>

            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
            title='Content'
              name="content"
              required
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            </div>

            {/*  if article */}
            {postType === 'article' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                title='Author'
                  type="text"
                  name="author"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
          </>
          )}
          {/*if post type is ratings*/}
          {postType === 'ratings' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      type="button"
                      title="Rating"
                      key={rating}
                      onClick={() => handleRating(rating)}
                      onMouseEnter={() => setHoveredRating(rating)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          rating <= (hoveredRating || selectedRating) ? "text-yellow-400" : "text-gray-400"
                        }`}
                        fill="currentColor"
                      />
                    </button>
                  ))}
                  {/* Hidden input to store the rating */}
                  <input type="hidden" name="rating" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comment
                </label>
                <textarea
                title='Comment'
                  name="comment"
                  required
                  rows={6}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Name
                </label>
                <input
                title='User Name'
                  type="text"
                  name="userName"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Publish {postType === 'article' ? 'Article': postType === 'ratings' ? 'Ratings' : 'Event'}
          </button>
        </form>
      </div>
    </div>
  );
};