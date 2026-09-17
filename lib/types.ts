export interface PracticeArea {
  number: string;
  name: string;
  description: string;
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
}

export interface Insight {
  slug: string;
  imageUrl: string;
  category: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface AttorneyData {
  fullName: string;
  photoUrl: string;
  oab: string;
  education: string;
  university: string;
  specializations: string[];
  practiceAreas: string;
  experience: string;
  bio: string[];
}
