
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TildaHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-purple-600 mr-6">VLDbrrs</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#catalog" className="text-gray-700 hover:text-purple-600 transition-colors">Каталог</a>
            <a href="#new" className="text-gray-700 hover:text-purple-600 transition-colors">Новинки</a>
            <a href="#sales" className="text-gray-700 hover:text-purple-600 transition-colors">Акции</a>
            <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors">Отзывы</a>
            <a href="#contacts" className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+78001234567" className="hidden md:flex items-center text-gray-700">
            <Icon name="Phone" className="w-4 h-4 mr-2" />
            8 (800) 123-45-67
          </a>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Заказать звонок
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TildaHeader;
