
import React from 'react';
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Стильная женская футболка с принтом, белая",
    price: 1299,
    oldPrice: 1999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 35,
    isFavorite: false,
    isNew: true,
  },
  {
    id: "2",
    name: "Мужская куртка из эко-кожи, черная",
    price: 5999,
    oldPrice: 7499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 20,
    isFavorite: true,
  },
  {
    id: "3",
    name: "Женские джинсы с высокой талией",
    price: 2599,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFavorite: false,
    isNew: true,
  },
  {
    id: "4",
    name: "Спортивные кроссовки для бега",
    price: 3999,
    oldPrice: 4999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 20,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Детский комбинезон, яркий с принтом",
    price: 1899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFavorite: false,
    isNew: true,
  },
  {
    id: "6",
    name: "Элегантное вечернее платье",
    price: 5999,
    oldPrice: 8999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 30,
    isFavorite: false,
  },
  {
    id: "7",
    name: "Мужская рубашка в клетку",
    price: 1799,
    oldPrice: 2199,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 20,
    isFavorite: false,
  },
  {
    id: "8",
    name: "Женская сумка из натуральной кожи",
    price: 4599,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    isFavorite: true,
  },
];

const CATEGORIES = [
  { id: '1', name: 'Женщинам', icon: 'User' },
  { id: '2', name: 'Мужчинам', icon: 'UserRound' },
  { id: '3', name: 'Детям', icon: 'Baby' },
  { id: '4', name: 'Обувь', icon: 'Footprints' },
  { id: '5', name: 'Аксессуары', icon: 'Watch' },
  { id: '6', name: 'Спорт', icon: 'Dumbbell' },
  { id: '7', name: 'Красота', icon: 'Sparkles' },
  { id: '8', name: 'Дом', icon: 'Home' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Banners */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <Banner
            variant="large"
            className="md:col-span-2 lg:col-span-2"
            imageUrl="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            title="Летняя коллекция 2025"
            subtitle="Скидки до 50% на новые модели"
            actionLabel="Смотреть"
          />
          <Banner
            imageUrl="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            title="Мужская мода"
            actionLabel="Подробнее"
          />
          <Banner
            imageUrl="https://images.unsplash.com/photo-1566206091558-7f218b696731?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            title="Детская одежда"
            actionLabel="Подробнее"
          />
        </section>
        
        {/* Categories */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Категории</h2>
            <Button variant="link" className="text-primary">
              Все категории <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {CATEGORIES.map((category) => (
              <div 
                key={category.id}
                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-primary/5"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                  <Icon name={category.icon} className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-center">{category.name}</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Popular products */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Популярные товары</h2>
            <Button variant="link" className="text-primary">
              Все товары <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={() => console.log('Add to cart:', product.id)}
                onAddToFavorite={() => console.log('Add to favorite:', product.id)}
              />
            ))}
          </div>
        </section>
        
        {/* Promotional banner */}
        <section className="mb-10">
          <Banner
            variant="large"
            imageUrl="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            title="Распродажа весенней коллекции"
            subtitle="Скидки до 70% на избранные товары"
            actionLabel="Перейти к распродаже"
          />
        </section>
        
        {/* Features section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Icon name="Truck" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Бесплатная доставка</h3>
              <p className="text-sm text-muted-foreground">При заказе от 2999 рублей</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Icon name="RefreshCw" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Легкий возврат</h3>
              <p className="text-sm text-muted-foreground">14 дней на возврат товара</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Icon name="BadgePercent" className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold mb-2">Бонусная программа</h3>
              <p className="text-sm text-muted-foreground">Кешбэк до 15% на все покупки</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-white border-t py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">VLDbrrs</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ваш любимый интернет-магазин модной одежды, обуви и аксессуаров
              </p>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Facebook" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Instagram" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Twitter" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Как сделать заказ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Способы оплаты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Доставка</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Возврат товара</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Бонусная программа</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Компания</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Реквизиты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Пресс-центр</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Контакты</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-muted-foreground" />
                  <span>8 (800) 123-45-67</span>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-muted-foreground" />
                  <span>support@vldbrrs.ru</span>
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-muted-foreground" />
                  <span>Москва, ул. Пушкина, д. 42</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
            © 2025 VLDbrrs. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
