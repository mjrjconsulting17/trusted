"use client";

import React, { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  Shield,
  Star,
  ChevronLeft,
  Plus,
  Minus
} from "lucide-react";
import { getProductById, products } from "@/lib/products";
import ProductCard from "@/components/product-card";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = React.use(params);
  const product = getProductById(resolvedParams.id);

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(product?.colors[0] || "");
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

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

  const getColorClass = (color: string) => {
    switch (color) {
      case 'Black':
        return 'bg-black';
      case 'White':
        return 'bg-white border-2 border-urban-300';
      case 'Gray':
      case 'Concrete Gray':
        return 'bg-gray-400';
      case 'Orange':
        return 'bg-orange-500';
      case 'Olive':
        return 'bg-green-600';
      case 'Concrete':
        return 'bg-concrete-400';
      default:
        return 'bg-urban-400';
    }
  };

  const formatPrice = (price: number) => `$${price}`;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // TODO: Implement cart functionality
    console.log("Added to cart:", {
      product: product.id,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-concrete-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-urban-600 hover:text-graffiti-orange transition-colors">
              Home
            </Link>
            <span className="text-urban-400">/</span>
            <Link
              href="/products"
              className="text-urban-600 hover:text-graffiti-orange transition-colors"
            >
              Products
            </Link>
            <span className="text-urban-400">/</span>
            <Link
              href={`/products?category=${product.category}`}
              className="text-urban-600 hover:text-graffiti-orange transition-colors"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace('s', "'s")}
            </Link>
            <span className="text-urban-400">/</span>
            <span className="text-urban-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Button
          variant="outline"
          className="mb-8 border-urban-200 hover:border-graffiti-orange"
          asChild
        >
          <Link href="/products">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg bg-concrete-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[600px] object-cover"
              />
              {product.badge && (
                <Badge
                  className={`absolute top-4 left-4 font-display font-bold text-white border-0 px-4 py-2 uppercase tracking-wider ${getBadgeColor(product.badge)}`}
                >
                  {product.badge}
                </Badge>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-urban-900/80 flex items-center justify-center">
                  <Badge className="bg-graffiti-red text-white font-bold px-6 py-3 text-xl">
                    SOLD OUT
                  </Badge>
                </div>
              )}
            </div>

            {/* Image Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index
                        ? 'border-graffiti-orange'
                        : 'border-urban-200 hover:border-urban-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category */}
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="border-graffiti-orange text-graffiti-orange">
                {product.category.replace('s', "'s")}
              </Badge>
              <Badge variant="outline" className="border-urban-400 text-urban-600">
                {product.subcategory}
              </Badge>
            </div>

            {/* Product Name & Rating */}
            <div>
              <h1 className="heading-lg text-urban-950 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-graffiti-yellow text-graffiti-yellow" />
                  ))}
                </div>
                <span className="text-sm text-urban-600">(127 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-urban-950">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-urban-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <Badge className="bg-graffiti-green text-white">
                    SAVE {formatPrice(product.originalPrice - product.price)}
                  </Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-urban-700 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="font-display font-bold text-urban-900 mb-3 uppercase tracking-wider">
                Color: {selectedColor}
              </h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-graffiti-orange ring-2 ring-graffiti-orange/30'
                        : 'border-urban-300 hover:border-urban-500'
                    } ${getColorClass(color)}`}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-display font-bold text-urban-900 mb-3 uppercase tracking-wider">
                Size
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 ${
                      selectedSize === size
                        ? 'bg-urban-900 text-white border-urban-900'
                        : 'border-urban-300 hover:border-graffiti-orange'
                    }`}
                  >
                    {size}
                  </Button>
                ))}
              </div>
              <Link
                href="/size-guide"
                className="text-sm text-graffiti-orange hover:underline mt-2 inline-block"
              >
                Size Guide
              </Link>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-display font-bold text-urban-900 mb-3 uppercase tracking-wider">
                Quantity
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-urban-300 rounded">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full h-14 btn-graffiti text-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
              </Button>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-12 btn-outline-graffiti">
                  <Heart className="mr-2 h-4 w-4" />
                  WISHLIST
                </Button>
                <Button variant="outline" className="h-12 btn-outline-graffiti">
                  <Share2 className="mr-2 h-4 w-4" />
                  SHARE
                </Button>
              </div>
            </div>

            {/* Shipping Info */}
            <Card className="border-urban-200">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Truck className="h-5 w-5 text-graffiti-orange" />
                    <span className="text-sm">Free shipping on orders over $200</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RotateCcw className="h-5 w-5 text-graffiti-blue" />
                    <span className="text-sm">30-day return policy (final sale excluded)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-graffiti-green" />
                    <span className="text-sm">Secure payment & authentic guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews">Reviews (127)</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-sm text-urban-900 mb-4">Product Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-urban-800 mb-2">Materials & Care</h4>
                      <ul className="space-y-1 text-urban-600">
                        <li>• 100% premium cotton (280 GSM)</li>
                        <li>• Pre-shrunk for perfect fit</li>
                        <li>• Machine wash cold, tumble dry low</li>
                        <li>• Do not bleach or iron directly on print</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-urban-800 mb-2">Features</h4>
                      <ul className="space-y-1 text-urban-600">
                        <li>• Authentic NYC street art inspired design</li>
                        <li>• Premium embroidered TRUSTED logo</li>
                        <li>• Reinforced seams for durability</li>
                        <li>• Limited edition colorways</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="shipping" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-sm text-urban-900 mb-4">Shipping & Returns</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-urban-800 mb-2">Shipping</h4>
                      <p className="text-urban-600 mb-2">
                        Free standard shipping on orders over $200. Express shipping available.
                      </p>
                      <ul className="space-y-1 text-urban-600">
                        <li>• Standard shipping: 5-7 business days</li>
                        <li>• Express shipping: 2-3 business days</li>
                        <li>• International shipping available</li>
                      </ul>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold text-urban-800 mb-2">Returns</h4>
                      <p className="text-urban-600">
                        30-day return policy for unworn items in original condition.
                        Sale items and limited editions are final sale.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-sm text-urban-900 mb-4">Customer Reviews</h3>
                  <div className="text-center py-8">
                    <p className="text-urban-600">Reviews coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="heading-lg text-urban-950 mb-8 text-center">
              YOU MIGHT ALSO LIKE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
