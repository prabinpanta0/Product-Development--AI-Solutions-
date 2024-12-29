import { IconType } from 'react-icons';

export interface Pastportfolio {
  id: string;
  title: string;
  description: string;
  keyFeatures: string[];

}

export interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  views: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'happening' | 'completed' | 'upcoming';
  location: string;
  imageUrl: string;
  views: number;
}

export interface Rating {
  id: string;
  rating: number;
  comment: string;
  userName: string;
  date: string;
}

export interface ContactForm {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  jobTitle: string;
  jobDetails: string;
  message: string;
  date: string;
}

export interface AdminSettings {
  username: string;
  theme: 'light' | 'dark';
  fontSize: 'small' | 'medium' | 'large';
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description?: string;
  date: string;
  category: 'event' | 'company' | 'testimonial' | 'product';
}

export interface Analytics {
  totalArticles: number;
  totalEvents: number;
  totalViews: number;
  recentViews: {
    date: string;
    views: number;
  }[];
  popularContent: {
    id: string;
    title: string;
    type: 'article' | 'event';
    views: number;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: IconType;
}