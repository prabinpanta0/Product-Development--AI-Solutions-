import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Article, Event, Rating, ContactForm, AdminSettings, GalleryItem, Analytics, Pastportfolio } from '../types';
import { getEventType } from '../utils/dateUtils';
import { dummyArticles, dummyEvents, dummyRatings, dummyContactForms, dummyGallery, dummyPastportfolios } from './dummyData';

interface Store {
  articles: Article[];
  events: Event[];
  ratings: Rating[];
  contactForms: ContactForm[];
  adminSettings: AdminSettings;
  gallery: GalleryItem[];
  Pastportfolios: Pastportfolio[];
  analytics: Analytics;
  isDarkMode: boolean;
  isAdminPanelOpen: boolean;
  addArticle: (article: Article) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  addEvent: (event: Event) => void;
  updateEvent: (id: string, event: Partial<Event>) => void;
  deleteEvent: (id: string) => void;
  addRating: (rating: Rating) => void;
  deleteRating: (id: string) => void;
  addContactForm: (form: ContactForm) => void;
  deleteContactForm: (id: string) => void;
  updateAdminSettings: (settings: Partial<AdminSettings>) => void;
  addGalleryItem: (item: GalleryItem) => void;
  deleteGalleryItem: (id: string) => void;
  incrementViews: (type: 'article' | 'event', id: string) => void;
  toggleDarkMode: () => void;
  toggleAdminPanel: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      articles: dummyArticles,
      events: dummyEvents,
      ratings: dummyRatings,
      contactForms: dummyContactForms,
      adminSettings: {
        username: 'admin',
        theme: 'light',
        fontSize: 'medium',
      },
      gallery: dummyGallery,
      Pastportfolios: dummyPastportfolios,
      isDarkMode: false,
      isAdminPanelOpen: false,
      // Analytics
      analytics: {
        totalArticles: dummyArticles.length,
        totalEvents: dummyEvents.length,
        totalViews: dummyArticles.reduce((acc, article) => acc + (article.views || 0), 0),
        recentViews: Array.from({ length: 7 }, (_, i) => ({
          date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          views: Math.floor(Math.random() * 100 + 50),
        })).reverse(),
        popularContent: [
          ...dummyArticles.map((article) => ({
            id: article.id,
            title: article.title,
            type: 'article' as const,
            views: article.views || 0,
          })),
          ...dummyEvents.map((event) => ({
            id: event.id,
            title: event.title,
            type: 'event' as const,
            views: event.views || 0,
          })),
        ]
          .sort((a, b) => b.views - a.views)
          .slice(0, 5),
      },

      
      
      addArticle: (article: Article) =>
        set((state) => ({
          articles: [article, ...state.articles],
          analytics: {
            ...state.analytics,
            totalArticles: state.analytics.totalArticles + 1,
          },
        })),

      updateArticle: (id: string, article: Partial<Article>) =>
        set((state) => ({
          articles: state.articles.map((a) =>
            a.id === id ? { ...a, ...article } : a
          ),
        })),

      deleteArticle: (id: string) =>
        set((state) => ({
          articles: state.articles.filter((a) => a.id !== id),
          analytics: {
            ...state.analytics,
            totalArticles: state.analytics.totalArticles - 1,
          },
        })),

      deleteContactForm: (id: string) =>
        set((state) => ({
          contactForms: state.contactForms.filter((c) => c.id !== id),
        })),

      deleteRating: (id: string) =>
        set((state) => ({
          ratings: state.ratings.filter((r) => r.id !== id),
        })),

      addEvent: (event: Event) =>
        set((state) => ({
          events: [
            { ...event, type: getEventType(event.date) },
            ...state.events,
          ],
          analytics: {
            ...state.analytics,
            totalEvents: state.analytics.totalEvents + 1,
          },
        })),

      updateEvent: (id: string, event: Partial<Event>) =>
        set((state) => ({
          events: state.events.map((e) =>
            e.id === id
              ? { ...e, ...event, type: getEventType(event.date || e.date) }
              : e
          ),
        })),

      deleteEvent: (id: string) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
          analytics: {
            ...state.analytics,
            totalEvents: state.analytics.totalEvents - 1,
          },
        })),

      addRating: (rating: Rating) =>
        set((state) => ({
          ratings: [rating, ...state.ratings],
        })),

      addContactForm: (form: ContactForm) =>
        set((state) => ({
          contactForms: [form, ...state.contactForms],
        })),

      updateAdminSettings: (settings: Partial<AdminSettings>) =>
        set((state) => ({
          adminSettings: { ...state.adminSettings, ...settings },
        })),

      addGalleryItem: (item: GalleryItem) =>
        set((state) => ({
          gallery: [item, ...state.gallery],
        })),

      deleteGalleryItem: (id: string) =>
        set((state) => ({
          gallery: state.gallery.filter((item) => item.id !== id),
        })),

      incrementViews: (type: 'article' | 'event', id: string) =>
        set((state) => {
          const items = type === 'article' ? state.articles : state.events;
          const updatedItems = items.map((item) =>
            item.id === id ? { ...item, views: (item.views || 0) + 1 } : item
          );

          const totalViews = state.analytics.totalViews + 1;
          const recentViews = [...state.analytics.recentViews];
          const todayIndex = recentViews.findIndex(
            (v) => v.date === new Date().toISOString().split('T')[0]
          );

          if (todayIndex >= 0) {
            recentViews[todayIndex].views++;
          }

          const popularContent = [
            ...state.analytics.popularContent.filter((c) => c.id !== id),
            {
              id,
              title: items.find((item) => item.id === id)?.title || '',
              type,
              views: (items.find((item) => item.id === id)?.views || 0) + 1,
            },
          ]
            .sort((a, b) => b.views - a.views)
            .slice(0, 5);

          return {
            [type === 'article' ? 'articles' : 'events']: updatedItems,
            analytics: {
              ...state.analytics,
              totalViews,
              recentViews,
              popularContent,
            },
          };
        }),

      toggleDarkMode: () =>
        set((state) => {
          const isDarkMode = !state.isDarkMode;
          if (isDarkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          return { isDarkMode };
        }),

      toggleAdminPanel: () =>
        set((state) => ({
          isAdminPanelOpen: !state.isAdminPanelOpen,
        })),
    }),
    {
      name: 'ai-solutions-storage',
    }
  )
);