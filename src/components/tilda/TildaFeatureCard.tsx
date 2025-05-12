
import React from 'react';
import Icon from "@/components/ui/icon";
import { LucideProps } from 'lucide-react';

interface TildaFeatureCardProps {
  iconName: string;
  title: string;
  description: string;
}

const TildaFeatureCard: React.FC<TildaFeatureCardProps> = ({ 
  iconName, 
  title, 
  description 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
        <Icon name={iconName} className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default TildaFeatureCard;
