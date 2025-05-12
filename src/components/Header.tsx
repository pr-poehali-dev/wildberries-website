
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 mr-4">
          <span className="text-2xl font-bold text-primary">VLDbrrs</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link to="/women" className="text-sm font-medium transition-colors hover:text-primary">
            Женщинам
          </Link>
          <Link to="/men" className="text-sm font-medium transition-colors hover:text-primary">
            Мужчинам
          </Link>
          <Link to="/kids" className="text-sm font-medium transition-colors hover:text-primary">
            Детям
          </Link>
          <Link to="/shoes" className="text-sm font-medium transition-colors hover:text-primary">
            Обувь
          </Link>
          <Link to="/accessories" className="text-sm font-medium transition-colors hover:text-primary">
            Аксессуары
          </Link>
        </nav>
        
        <div className="flex-1 flex items-center">
          <div className="relative w-full max-w-md">
            <Input 
              type="search" 
              placeholder="Поиск товаров" 
              className="w-full rounded-full pr-10 focus-visible:ring-primary"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full rounded-r-full hover:bg-transparent"
            >
              <Icon name="Search" className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        <div className="ml-auto flex items-center gap-4">
          <Link to="/profile" className="hidden md:flex flex-col items-center text-sm font-medium">
            <Icon name="User" className="h-5 w-5" />
            <span className="text-xs">Профиль</span>
          </Link>
          <Link to="/favorites" className="hidden md:flex flex-col items-center text-sm font-medium">
            <Icon name="Heart" className="h-5 w-5" />
            <span className="text-xs">Избранное</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center text-sm font-medium relative">
            <Icon name="ShoppingCart" className="h-5 w-5" />
            <span className="text-xs">Корзина</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              2
            </span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
          >
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
