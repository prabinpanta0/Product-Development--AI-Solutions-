import React from 'react';
import { useStore } from '../../store/store';
import toast from 'react-hot-toast';

export const Settings = () => {
  const { adminSettings, updateAdminSettings } = useStore();

  const handleThemeChange = (theme: 'light' | 'dark') => {
    updateAdminSettings({ theme });
    toast.success('Theme updated successfully!');
  };

  const handleFontSizeChange = (fontSize: 'small' | 'medium' | 'large') => {
    updateAdminSettings({ fontSize });
    toast.success('Font size updated successfully!');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Theme</h3>
          <div className="flex space-x-4">
            {(['light', 'dark'] as const).map((theme) => (
              <button
                key={theme}
                onClick={() => handleThemeChange(theme)}
                className={`px-4 py-2 rounded-lg ${
                  adminSettings.theme === theme
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Font Size</h3>
          <div className="flex space-x-4">
            {(['small', 'medium', 'large'] as const).map((size) => (
              <button
                key={size}
                onClick={() => handleFontSizeChange(size)}
                className={`px-4 py-2 rounded-lg ${
                  adminSettings.fontSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                value={adminSettings.username}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Update Account Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};