import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'HOT':
        return 'bg-graffiti-red';
      case 'NEW':
        return 'bg-graffiti-blue';
      case 'SALE':
        return 'bg-graffiti-green';
      case 'LIMITED':
        return 'bg-graffiti-purple';
      default:
        return 'bg-urban-600';
    }
  };

  const formatPrice = (price: number) => {
    return `$${price}`;
  };

  return (
    <Card className="group relative overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 hover-lift bg-white">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-urban-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge */}
        {product.badge && (
          <Badge
            className={`absolute top-3 left-3 font-display font-bold text-white border-0 px-3 py-1 uppercase tracking-wider ${getBadgeColor(product.badge)}`}
          >
            {product.badge}
          </Badge>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex flex-col space-y-2">
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-urban-900 shadow-lg"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-white/90 hover:bg-white text-urban-900 shadow-lg"
              asChild
            >
              <Link href={`/products/${product.id}`}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <Button className="w-full btn-graffiti">
            <ShoppingCart className="mr-2 h-4 w-4" />
            ADD TO CART
          </Button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-urban-900/80 flex items-center justify-center">
            <Badge className="bg-graffiti-red text-white font-bold px-4 py-2 text-lg">
              SOLD OUT
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info */}
      <CardContent className="p-4 bg-white relative">
        <Link href={`/products/${product.id}`} className="block">
          {/* Category */}
          <p className="text-xs font-medium text-urban-500 uppercase tracking-wider mb-1">
            {product.category.replace('s', "'s")} • {product.subcategory}
          </p>

          {/* Product Name */}
          <h3 className="font-display font-bold text-urban-900 text-sm mb-2 uppercase tracking-wider leading-tight group-hover:text-graffiti-orange transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xl font-bold text-urban-950">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-urban-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.originalPrice && (
              <Badge className="bg-graffiti-green text-white text-xs px-2 py-1">
                SAVE ${product.originalPrice - product.price}
              </Badge>
            )}
          </div>

          {/* Colors Available */}
          <div className="flex items-center space-x-1 mb-2">
            <span className="text-xs text-urban-600">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full border border-urban-300 ${
                    color === 'Black' ? 'bg-black' :
                    color === 'White' ? 'bg-white' :
                    color === 'Gray' || color === 'Concrete Gray' ? 'bg-gray-400' :
                    color === 'Orange' ? 'bg-orange-500' :
                    color === 'Olive' ? 'bg-green-600' :
                    'bg-urban-400'
                  }`}
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <span className="text-xs text-urban-500">+{product.colors.length - 3}</span>
              )}
            </div>
          </div>

          {/* Sizes Available */}
          <div className="flex items-center space-x-1">
            <span className="text-xs text-urban-600">Sizes:</span>
            <span className="text-xs text-urban-800 font-medium">
              {product.sizes.slice(0, 4).join(', ')}
              {product.sizes.length > 4 && '...'}
            </span>
          </div>
        </Link>
      </CardContent>

      {/* Street Art Border Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-graffiti-orange via-graffiti-blue to-graffiti-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
};

export default ProductCard;
