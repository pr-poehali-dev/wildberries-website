import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import TildaHeader from "@/components/tilda/TildaHeader";
import TildaFeatureCard from "@/components/tilda/TildaFeatureCard";
import TildaReviewCard from "@/components/tilda/TildaReviewCard";

// Данные для компонентов
const FEATURES = [
  {
    iconName: "Truck",
    title: "Быстрая доставка",
    description: "Доставляем заказы по всей России за 1-3 дня",
  },
  {
    iconName: "BadgePercent",
    title: "Выгодные цены",
    description: "Скидки до 90% на тысячи товаров ежедневно",
  },
  {
    iconName: "RefreshCw",
    title: "Легкий возврат",
    description: "Вернуть товар можно в течение 14 дней",
  },
  {
    iconName: "Wallet",
    title: "Удобная оплата",
    description: "Оплачивайте заказы любым удобным способом",
  },
];

const CATEGORIES = [
  {
    icon: "User",
    name: "Женщинам",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    icon: "UserRound",
    name: "Мужчинам",
    image:
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    icon: "Baby",
    name: "Детям",
    image:
      "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    icon: "Footprints",
    name: "Обувь",
    image:
      "https://images.unsplash.com/photo-1549971352-c31f2c0a8b0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    icon: "Watch",
    name: "Аксессуары",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    icon: "Home",
    name: "Для дома",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const PRODUCTS = [
  {
    name: "Женская футболка",
    price: 999,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 60,
  },
  {
    name: "Мужская куртка",
    price: 4999,
    oldPrice: 12999,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 62,
  },
  {
    name: "Кроссовки спортивные",
    price: 3599,
    oldPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 55,
  },
  {
    name: "Сумка женская",
    price: 2799,
    oldPrice: 6999,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    discount: 60,
  },
];

const REVIEWS = [
  {
    name: "Елена Смирнова",
    text: "Прекрасный магазин! Заказываю уже второй раз, качество одежды отличное. Доставка быстрая, все приходит в срок.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    rating: 5,
  },
  {
    name: "Александр Петров",
    text: "Отличный сервис. Недавно заказал куртку, очень доволен качеством. Размер подошел идеально согласно таблице размеров на сайте.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
  },
  {
    name: "Мария Иванова",
    text: "Очень удобный сайт, большой выбор товаров. Несколько раз возвращала вещи, которые не подошли - процесс возврата простой и быстрый.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
];

const TildaLanding = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Шапка */}
      <TildaHeader />

      {/* Главный баннер */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1500"
            alt="Модная одежда"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-lg text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Летняя коллекция 2025
            </h2>
            <p className="text-xl mb-8">
              Скидки до 70% на все товары из новой коллекции модной одежды,
              обуви и аксессуаров
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-lg px-8"
              >
                Перейти в каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-700 text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <TildaFeatureCard
                key={index}
                iconName={feature.iconName}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Популярные категории */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Популярные категории
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer transition-all bg-gray-200 aspect-square"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Распродажа */}
      <section id="sales" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Горящие скидки
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PRODUCTS.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm group transition-all hover:shadow-md"
              >
                <div className="relative aspect-square overflow-hidden">
                  <div className="absolute top-2 right-2 z-10">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  </div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-red-500">
                      {product.price} ₽
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.oldPrice} ₽
                    </span>
                  </div>
                  <Button className="w-full mt-3 bg-purple-600 hover:bg-purple-700">
                    В корзину
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Смотреть все акции
            </Button>
          </div>
        </div>
      </section>

      {/* Новая коллекция */}
      <section id="new" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Новая коллекция
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative aspect-video md:aspect-auto md:h-[500px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800"
                alt="Женская коллекция"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Женская коллекция
                </h3>
                <p className="text-white mb-4">
                  Элегантность и стиль в каждой детали
                </p>
                <Button className="w-max bg-white text-purple-700 hover:bg-purple-600 hover:text-white">
                  Смотреть
                </Button>
              </div>
            </div>

            <div className="relative aspect-video md:aspect-auto md:h-[500px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800"
                alt="Мужская коллекция"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Мужская коллекция
                </h3>
                <p className="text-white mb-4">
                  Безупречный стиль для уверенных мужчин
                </p>
                <Button className="w-max bg-white text-purple-700 hover:bg-purple-600 hover:text-white">
                  Смотреть
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Рассылка */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
            <p className="text-lg mb-8 text-purple-100">
              Узнавайте первыми о новых коллекциях и специальных предложениях
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-800"
              />
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-200"
              >
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Отзывы наших клиентов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <TildaReviewCard
                key={index}
                name={review.name}
                text={review.text}
                avatar={review.avatar}
                rating={review.rating}
              />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              Все отзывы
            </Button>
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-purple-600 text-white">
                <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
                <p className="mb-8">
                  Есть вопросы о товарах или доставке? Заполните форму, и мы
                  свяжемся с вами в ближайшее время.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="w-5 h-5 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Телефон</h3>
                      <p>8 (800) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="w-5 h-5 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@vldbrrs.ru</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="w-5 h-5 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Адрес</h3>
                      <p>г. Москва, ул. Пушкина, д. 10</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Сообщение
                    </label>
                    <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 h-24"></textarea>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">VLDbrrs</h3>
              <p className="text-gray-400 mb-6">
                Интернет-магазин модной одежды, обуви и аксессуаров для всей
                семьи
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
                >
                  <Icon name="Facebook" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
                >
                  <Icon name="Instagram" className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-purple-600 transition-colors"
                >
                  <Icon name="Twitter" className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Женщинам
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Мужчинам
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Детям
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Обувь
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Аксессуары
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    О компании
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Доставка и оплата
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Возврат товара
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Блог
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-purple-400 transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>8 (800) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@vldbrrs.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>г. Москва, ул. Пушкина, д. 10</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" className="w-4 h-4" />
                  <span>Пн-Вс: 9:00 - 21:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © 2025 VLDbrrs. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TildaLanding;
