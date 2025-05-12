
import React from 'react';
import Icon from "@/components/ui/icon";

interface TildaReviewCardProps {
  name: string;
  text: string;
  avatar: string;
  rating: number;
}

const TildaReviewCard: React.FC<TildaReviewCardProps> = ({ 
  name, 
  text, 
  avatar, 
  rating 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <div className="flex text-yellow-400">
            {Array(5).fill(0).map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};

export default TildaReviewCard;
