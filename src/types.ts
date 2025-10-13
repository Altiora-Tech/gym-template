import React from 'react';

export interface Class {
  id: string;
  name: string;
  description: string;
  image: string;
  schedule: string;
  category: 'Cardio' | 'Fuerza' | 'Flexibilidad';
}

export interface Trainer {
  id: number;
  name:string;
  specialty: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  }
}

export interface Plan {
  name: string;
  icon: string;
  price: string;
  features: string[];
  isPopular: boolean;
}

export interface Testimonial {
    id: number;
    name: string;
    quote: string;
    story: string;
    rating: number;
    beforeImage: string;
    afterImage: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
}

export interface ScheduleEntry {
  time: string;
  [day: string]: string | { name: string; trainer: string; category: Class['category'] } | null;
}

export interface Service {
  icon: React.ReactElement;
  title: string;
  description: string;
}
