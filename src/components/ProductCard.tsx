
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  image: string;
  discount?: number;
  isFavorite?: boolean;
  isNew?: boolean;
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
}

const ProductCard = ({
  id,
  name,
  price,
  oldPrice,
  rating = 0,
  image,
  discount,
  isFavorite = false,
  isNew = false,
  onAddToCart,
  onAddToFavorite,
}: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="overflow-hidden h-full group transition-all duration-300 hover:shadow-lg border-transparent hover:border-primary/20">
      <CardContent className="p-0 relative">
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              Новинка
            </Badge>
          )}
          {discount && (
            <Badge variant="destructive">
              -{discount}%
            </Badge>
          )}
        </div>
        <AspectRatio ratio={1} className="bg-muted">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <Button
            size="icon"
            variant="secondary"
            className="rounded-full bg-white text-primary hover:text-white hover:bg-primary"
            onClick={onAddToFavorite}
          >
            <Icon name={isFavorite ? "Heart" : "HeartIcon"} className={cn(isFavorite && "fill-primary text-primary")} />
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-3 gap-1">
        <div className="flex items-center text-sm text-muted-foreground">
          <Icon name="Star" className="text-yellow-400 w-4 h-4" />
          <span className="ml-1">{rating.toFixed(1)}</span>
        </div>
        <h3 className="text-sm font-medium line-clamp-2 mb-1 mt-1" title={name}>
          {name}
        </h3>
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary">{formatPrice(price)}</span>
            {oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(oldPrice)}
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            className="mt-2 w-full bg-primary/90 hover:bg-primary transition-colors"
            onClick={onAddToCart}
          >
            В корзину
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
