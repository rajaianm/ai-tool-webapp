import ToolCard from '@/components/ToolCard';
import { Tool } from '@/types/tool';

// Mock data for testing
const mockTools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'Advanced AI language model for natural conversations and content creation',
    category: 'AI & Machine Learning',
    imageUrl: '/images/chatgpt.png',
    websiteUrl: 'https://chat.openai.com',
    features: ['Natural language processing', 'Content generation', 'Code assistance'],
    status: 'approved',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation tool for creating stunning artwork and illustrations',
    category: 'AI & Machine Learning',
    imageUrl: '/images/midjourney.png',
    websiteUrl: 'https://www.midjourney.com',
    features: ['Image generation', 'Art style customization', 'High-resolution output'],
    status: 'approved',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Amazing Web Tools
        </h1>
        <p className="text-xl text-gray-600">
          Explore our curated collection of the best web tools for developers and creators
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
}
