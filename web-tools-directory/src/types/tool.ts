export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  websiteUrl: string;
  features: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
} 